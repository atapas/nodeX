
/*
* @description : provided an example to create a table named "categories" with columns : id, name and description
*
*/

const Category = sequelize.define("category", {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    name: {
    type: Sequelize.STRING,
    allowNull: false
    },
    description: {
    type: Sequelize.STRING
    },
},{
    tableName: 'categories'
    /**
    * This helps you to provie a custom name to the table
    * If above is not provided, model name is converted into
   plural and set as the table name
    *
    * If we want to just use the model name provided, we can
   provide the below option :
    *
    * freezeTableName: true
    */
    });
return Category;
