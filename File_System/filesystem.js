const fs = require('fs');
//Reading from a file
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err," ",data);
})

const s =fs.readFileSync('file.txt');
console.log(s.toString());

const { open } = require('node:fs/promises');

(async () => {
  const file = await open('./file.txt');

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();

//writing a into a file 


fs.writeFile('newfilesystem.txt', 'Hello, I am Vaishnavi !.I am learning NodeJS', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully.');
});

//checking if a file exists in the directory or not



fs.access('file.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist.');
    return;
  }
  console.log('File exists.');
});


//creating directories using FS
fs.mkdir('mydir', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directory created successfully.');
});


