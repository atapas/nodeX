/**
 * step 1: scan all folders with *-module pattern (OK)
 * 
 * step 2: for each folder, do the following steps (conversion to html)
 *  step 2.1: read each .js file and their content
 *  step 2.2: generate some html for each file content
 *  step 2.3: store there files references, nested into topic and files for each one
 * 
 * step 3: with the topics stored, do the following steps:
 *  step 3.1: generate an index.html file with "collapsing structure" (for each topic)
 * 
 * step 4 (optional): do some grunt job to minify the html
 * 
 * step 5: put on github ci to generate a github page
 */
const fs = require('fs');
const { readFile, writeFile, mkdir, rm, copyFile } = require('fs/promises');


const readAllJsFilesOnCodePath = async ({ path = '' }) => {
    const files = await fs.promises.readdir(`${path}/code`, (err, files = []) => {
        if (err) { throw new Error({ message: 'Unable to scan directory: ', err }) }
        const filenames = files.map(filename => `${path}/${filename}`);
        return filenames;
    });
    return files
        .map(filename => `${path}/code/${filename}`)
        .filter((filepath = '') => filepath.endsWith('.js'));
};

const getAllModuleDirectoriesOnPath = async ({ path = '' }) => {
    const files = await fs.promises.readdir(path, (err, files = []) => {
        if (err) { throw new Error({ message: 'Unable to scan directory: ', err }) }
        const filenames = files.map(filename => `${path}/${filename}`)
        return filenames
    }) || [];
    return files
        .filter(file => file.endsWith('-module'))
        .map(file => `${path}/${file}`);
};

const getFeatures = async ({ folderPaths = [] }) => {
    const folderPromises = folderPaths.map(path => readAllJsFilesOnCodePath({ path }));
    const jsFilePaths = await (await Promise.all(folderPromises))
        .flat();
    return (await Promise.all(jsFilePaths.map(path => readFile(path, 'utf-8'))))
        .map((content, i) => {
            const path = jsFilePaths[i];
            const regex = /(.+?)\/(\w+)-(module)\/code\/(.+?)\.js/i;
            const group = path.replace(regex, '$2');
            const id = path
                .replace(regex, '$4')
                .replace(/([A-Z])/, '-$1')
                .toLowerCase();
            const topic = path
                .replace(regex, '$4')
                .replace(/([A-Z])/, ' $1')
                .replace(/(\-)/, ' ');
            const parsedContent = content
                .replace(/</gmi, '&lt')
                .replace(/>/gmi, '&gt')
                .replace(/(?:\r\n|\r|\n)/g, '<br>');
            const html = `<code>${parsedContent}</code>`
            return { group, topic, html, id };
        });
};

const getFeaturesWithFormattedTopics = async ({ features = [] }) => {
    const path = `${__dirname}/src/templates/topic-template.html`;
    const topicTemplate = await readFile(path, 'utf-8');
    return features.map(feature => Object.assign({}, feature, {
        html: topicTemplate
            .replace(/{{ topicName }}/gmi, feature.topic)
            .replace(/{{ topicId }}/gmi, feature.id)
    }));
}

const getFeaturesWithFormattedGroups = async ({ featuresWithFormattedTopics = [] }) => {
    const path = `${__dirname}/src/templates/group-template.html`;
    const groupTemplate = await readFile(path, 'utf-8');
    const uniqueGroups = featuresWithFormattedTopics
        .reduce((acc = [], { group }) => acc.includes(group) ? acc : [...acc, group], []);
    return uniqueGroups.map(uniqueGroup => {
        const groupFeatures = featuresWithFormattedTopics.filter(({ group }) => group === uniqueGroup);
        const featuresHtml = groupFeatures.map(({ html }) => html).join('');
        const html = groupTemplate
            .replace(/{{ topics }}/gmi, featuresHtml)
            .replace(/{{ collapseTarget }}/gmi, `${uniqueGroup}-id`)
            .replace(/{{ groupName }}/mi, uniqueGroup);
        return html;
    }).join('');
}

const getHtml = async ({ groupsHtml = '' }) => {
    const path = `${__dirname}/src/templates/features-template.html`;
    const featuresTemplate = await readFile(path, 'utf-8');
    return featuresTemplate
        .replace(/{{ groups }}/gmi, groupsHtml)
        .replace(/..\/css\/features-template\.css/, 'styles.css')
        .replace(/..\/scripts\/main.js/, 'app.js');
}

const getHtmlWithInjectedData = ({ features, html }) => {
    const topicsStr = JSON.stringify(features.map(({ id, html, topic }) => ({ id, html, topic })));
    const data = `var data = ${topicsStr};`;
    return html.replace(/\/\/ {{ injectedData }}/, data);
}

const build = async ({ basePath, html }) => {
    const buildDir = `${basePath}/build`;
    const srcDir = `${basePath}/src`;
    const cssFilePath = `${srcDir}/css/features-template.css`;
    const scriptFilePath = `${srcDir}/scripts/main.js`;
    const filepath = `${buildDir}/index.html`;

    await rm(buildDir, { recursive: true, force: true });

    try { await mkdir(buildDir); } catch (err) { console.log(err); }

    await copyFile(cssFilePath, `${buildDir}/styles.css`);
    await copyFile(scriptFilePath, `${buildDir}/app.js`);
    await writeFile(filepath, html);
}

const app = async () => {
    console.time('html-output');
    const folderPaths = await getAllModuleDirectoriesOnPath({ path: __dirname });
    const features = await getFeatures({ folderPaths });
    const featuresWithFormattedTopics = await getFeaturesWithFormattedTopics({ features })
    const groupsHtml = await getFeaturesWithFormattedGroups({ featuresWithFormattedTopics })
    const html = await getHtml({ groupsHtml });
    const injectedHtml = getHtmlWithInjectedData({ features, html });
    await build({ basePath: __dirname, html: injectedHtml });
    console.timeEnd('html-output');
}

app();