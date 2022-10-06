//The output of the URL method can be convertd toString or toJSON

const newUrl = new URL(
  "https://blog.typicode.com/husky-git-hooks-autoinstall/search?articleID=1"
);
const anotherUrl = new URL("http://localhost:5000/api/v1/search?author=Vick");

//toString
console.log(newUrl.toString());
console.log(anotherUrl.toString());

console.log("-------------------------------------");

//toJSON
console.log(newUrl.toJSON());
console.log(anotherUrl.toJSON());
