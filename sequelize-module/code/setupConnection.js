/*
* @description : The Sequelize function in sequelize module is used to create an instance to connect with database.
*                authenticate function authenticates the database with provided value, if not returns an error.
*                sync function when called, authenticates and create connection first by calling the createConnection(), 
*                then if successfull, runs the callback function
*/

const { Sequelize } = require("sequelize");
function createConnection() {

    let sequelize = new Sequelize('<Database name>', '<user>', '<password>', {
        host: 'localhost',
        dialect: 'mysql',
    });

    sequelize.authenticate().then(() => {
        console.log('connected successfully');
    }).catch((error) => {
        console.log("error occurred");
    });

    return { sequelize }

}

let { sequelize } = createConnection();

function executeWithSync(promiseCallback) {
    sequelize.sync().then(() => promiseCallback);
}

module.exports = { sequelize, executeWithSync };