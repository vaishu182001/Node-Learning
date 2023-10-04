const path = require('node:path');

const fullPath = path.join(__dirname, 'mydir', 'myfile.txt');
console.log(fullPath);

path.basename('C:\\temp\\myfile.html');

path.win32.basename('C:\\temp\\myfile.html');

path.dirname('/foo/bar/baz/asdf/quux');

path.extname('index.html');

path.extname('index.coffee.md');

const absolutePath = path.resolve('path', 'to', 'myFile.txt');
console.log(absolutePath);

const pathInfo = path.parse('/path/to/myFile.txt');
console.log(pathInfo);

console.log(path.isAbsolute('/path/to/myFile.txt')); 
console.log(path.isAbsolute('relative/path.txt'));   

const normalizedPath = path.normalize('/path/to/../myFile.txt');
console.log(normalizedPath);


