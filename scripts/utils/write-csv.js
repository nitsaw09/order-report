const fs = require('fs');

const writeCsv = (filename, data) => {
    fs.writeFile(filename, data, error => {
        if (error) {
            throw new Error(`Error: ${error.message}`);
        } else {
            console.log(`saved as ${filename}`);
        }
   });
}

module.exports = writeCsv;