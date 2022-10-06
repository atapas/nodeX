//The host and hostname of a url can be gotten using the URL module

const newUrl = new URL(
  "https://blog.typicode.com/husky-git-hooks-autoinstall/search?articleID=1"
);
const anotherUrl = new URL("http://localhost:5000/api/v1/search?author=Vick");

//Host
//Specifies the host  of a url

console.log(newUrl.host); //=> blog.typicode.com
console.log(anotherUrl.host);
//Hostname
//Specifies the hostname of a url
console.log(newUrl.hostname); //=>blog.typicode.com
console.log(anotherUrl.hostname);
//Path
//To output the appended path to the host/hostname
console.log(newUrl.pathname); //Outputs => /husky-git-hooks-autoinstall/
console.log(anotherUrl.pathname);

//Protocol
//Specifies the url's protocol either http or https
console.log(newUrl.protocol); //Outputs => https:
console.log(anotherUrl.protocol);
//Port
//Specifies the port the url is running on similar to the port created when creating a http server
console.log(newUrl.port); //Outputs port number , e.g 5000,3000,etc
console.log(anotherUrl.port);

//Origin
//Identifies the url's read-only origin
console.log(newUrl.origin); //Outputs => https://blog.typicode.com
console.log(anotherUrl.origin);

//SearchParams
//Identifies search parameters of a url
console.log(newUrl.searchParams); //Outputs=> {articleID => 1}
console.log(anotherUrl.searchParams);
