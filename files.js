const fs = require('fs')

// reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('Last line')



// writing files 

// fs.writeFile('./docs/blog1.txt', 'Welcome to kodstech', () => {
//     console.log("file wriiten"); 
// })

// fs.writeFile('./docs/blog2.txt', 'Welcome to kods technology', () => {
//     console.log("file wriiten"); // it is automatically creating the file.
// })


// directories

// fs.mkdir('./assets', () => {
//     console.log("Folder created") // if already present with the same name it will throw an error;
// })

// if(!fs.existsSync('./assests')){
//     fs.mkdir('./assests', (err) => {
//         if(err){
//             console.log(err);
//         }
//     })
//     console.log('Folder created');
// }
// else{
//     fs.rmdir('./assests', (err) => {
//         if(err){
//             console.log(err);
//         }
//     })
//     console.log('Folder deleted');
// }

// deleting files 

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}

