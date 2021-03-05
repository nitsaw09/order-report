const reader = require("xlsx");
const path = require("path");

const parseXlsx = (filePath) => {
    try {
        const ext = path.extname(filePath);
        if(ext !== ".xlsx") {
            throw new Error("File format is not valid");
        }
        let data = [];
        const file = reader.readFile(filePath);
        const sheets = file.SheetNames;

        // loop through the number sheets attached to xlsx
        for(let i = 0; i < sheets.length; i++) 
        { 
            data = reader.utils.sheet_to_json( 
                file.Sheets[file.SheetNames[i]]
            ); 
        }
        return data;
    } catch(error) {
        throw new Error(error.message);
    }
}

module.exports = parseXlsx;