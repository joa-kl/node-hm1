const fs = require('fs');
const importedData = require("../../base")
const { format } = require('date-fns');

fs.readdir(__dirname, (error, files) => {
    if (error) {
        console.log("wystąpil błąd: ", error.message);
    } else {
        console.log("Lista plików: ", files)
    }
});

const date = format(new Date(), "yyyy-MM-dd HH:mm:ss");


console.log("Nazwa pliku: ", __filename);
console.log("katalog skryptów: ", __dirname);
console.log(importedData.test);
console.log(date);

