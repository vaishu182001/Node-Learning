const fs = require('fs');

fs.readdir('mydir', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Files in directory:', files);
});

//deleting a file
fs.unlink('file.txt', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File deleted successfully.');
  });

  //deleting a directory
  fs.rmdir('mydir', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Directory deleted successfully.');
  });