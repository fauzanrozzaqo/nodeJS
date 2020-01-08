const fs = require('fs');
//memanggil zlib module (zlib module biasanya utk compressing file membuatnya menjadi zip atau gz file)
const zlib = require('zlib');
//membuat transformation stream untuk mengcompress file
const gzip = zlib.createGzip();
//membuat transformation stream untuk mengekstrak file
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
//Menggunakan pipe utk mengirim chunk dari read stream
readStream.pipe(gunzip).pipe(writeStream);
//menggunakan pipe membutuhkan 2 stream source stream dan destination stream

//penggunaan pipe chaining
//readStream.pipe(gzip).pipe(writeStream);