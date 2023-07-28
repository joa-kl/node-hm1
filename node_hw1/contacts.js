const fs = require('fs');

// fs.readFile('./blog.txt', (error, data) => {
//     if (error) {
//         console.log(error)
//     };
//     console.log(data.toString());
// })

// fs.writeFile('./blog1.txt', 'hello world', () => {
//     console.log('files was written');
// })
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder removed')
    })
}

if (fs.existsSync('./blog1.txt')) {
    fs.unlink('./blog1.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}