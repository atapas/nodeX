const openDialog = ({ html = '', topic = '' }) => {
    const highlightedHtml = `<pre><code class="languages-js">${Prism.highlight(html, Prism.languages.javascript, 'javascript')}</code></pre>`;

    document.getElementById('modalTitle').innerHTML = `module - ${topic}`.toUpperCase();
    document.getElementById('modalContent').innerHTML = highlightedHtml;
    const options = {};
    const modal = new bootstrap.Modal(document.getElementById('staticBackdropModal'), options);
    modal.show();
    copyToClipboard(html);
}

const copyToClipboard = (html) => {
    const copyToClipboardBtn = document.getElementById('copyToClipboard');
    copyToClipboardBtn.addEventListener('click', async () => {
        if ('clipboard' in navigator) {
            await navigator.clipboard.writeText(html);
            copyToClipboardBtn.classList.add('active');
            const timeout = setTimeout(() => {
                copyToClipboardBtn.classList.remove('active');
                clearTimeout(timeout)
            }, 1000);
        } else {
            alert('This functionality is not supported by your browser')
        }
    })
}

window.onload = () => {
    const groups = document.querySelectorAll('.module-row');
    const topicCards = document.querySelectorAll('.topic-card');

    groups.forEach(group => {
        group.addEventListener('click', (el) => {
            const { currentTarget } = el;
            const [collapseButton] = currentTarget.getElementsByClassName('btn btn-link');
            collapseButton.click();
        });
    });

    topicCards.forEach(topic => {
        topic.addEventListener('click', (el) => {
            const { currentTarget: { id: currentId } = {} } = el;
            const { html, topic } = data.find(({ id }) => id === currentId);
            openDialog({ html, topic });
        });
    });
};
