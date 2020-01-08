const fs = require('fs');
//membaca isi file menggunakan readstream
const readStream = fs.createReadStream('./writefile.txt', 'utf8');

//mengirim data chunk ke file lain
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
});