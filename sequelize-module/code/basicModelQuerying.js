/*
* @Description : Suppose we need to find out the category from the category table whose id is either 2 or 5 then that
*                can be done by running the following command
*/

category.findAll({
    where:{
    Id:{
     [Op.or]:[2,5]
    }
})


/*
* @description :suppose we need to find out all the categories whose id is neither 1,2 or 3 and contains a substring
*              `product` in its description then the script will be:
*/

category.findAll({
    where: {
        [Op.and]:
            { Id:{
        [Op.gt]:3 }
    }, {
        description:{
            [Op.substring]:’product’
} } } })