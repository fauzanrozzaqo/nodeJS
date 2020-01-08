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

//menghapus file menggunakan file system module nodejs
// fs.unlink('example2.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('successfully deleted the file');
// });

//membuat folder menggunakan file system module
// fs.mkdir('tutorial', (err)=>{
//     if(err)
//     console.log(err);
//     else{

//         //menghapus folder menggunakan file system module
//         // fs.rmdir('tutorial', (err)=>{
//         //     if(err)
//         //     console.log(err);
//         //     else{
//         //         console.log('successfully deleted the folder');
//         //     }
//         // });

//         //menulis ke dalam file menggunakan file system module
//         // fs.writeFile('./tutorial/example.txt','123', (err)=>{
//         //     if(err)
//         //     console.log(err);
//         //     else
//         //     console.log('successfully created file');
//         // });
//     }
//});
//menghapus folder yang memiliki file didalamnya menggunakan file system module
// fs.unlink('./tutorial/example.txt',(err)=>{
//         if(err)
//         console.log(err);
//         else
//         {
//             fs.rmdir('tutorial',(err)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else {
//                     console.log('deleted folder');
//                 }
//             });
//         }
//     });

//menghapus folder yang memiliki banyak file didalamnya
fs.readdir('example',(err,files)=>{
    if(err)
    console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err)
                console.log(err);
                else{
                    console.log('successfully deleted file');
                }
            });
        }
    }
});