const  fs = require('fs');
//fs adalah file system

//membuat file baru
// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('File successfully created');
//         fs.readFile('example.txt','utf8', (err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else {
//                 console.log(file);
//             }
//         })
//     }
// })

//mengubah nama file menggunakan file system module nodejs
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log('successfully renamed the file');
//     }
// });

// menambahkan data baru menggunakan file system module nodejs
// fs.appendFile('example2.txt', 'Some data being appended', (err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('Successfully appended data to file');
// })

fs.unlink('example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('successfully deleted the file');
});