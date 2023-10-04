import url from 'node:url';
const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL);
console.log(myURL.href);

//parsing the URl

const myUrl = 'https://www.example.com/search?q=node.js';

const parsedUrl = url.parse(myUrl, true); // The second argument is for parsing query parameters

console.log(parsedUrl);
