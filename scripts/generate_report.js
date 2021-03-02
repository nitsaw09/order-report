const fs = require('fs');
const parseXlsx = require('./utils/parse-xlsx');
const args = process.argv.slice(2);

const writeToCSVFile = () => {
    try {
        if(args.length < 1) {
            throw new Error(`1 argument is missing`);
        }
        const filename = args[0];
        const data = fetchData();
        fs.writeFile(filename, data, err => {
            if (err) {
                console.log(`Error: ${error.message}`);
            } else {
                console.log(`saved as ${filename}`);
            }
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
  
const fetchData = () => {
    try {
        const data = parseXlsx();
        let header = [];
        let rows = [];
        if(data.length > 0) {
            const getHeaders = Object.keys(data[0]).join(",");
            header.push(getHeaders);
            rows = data.map(d => Object.values(d).join(","));
        }
        return header.concat(rows).join("\n");
    } catch(error) {
        throw new Error(error.message);
    }
}

writeToCSVFile();