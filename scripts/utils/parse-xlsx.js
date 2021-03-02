const reader = require("xlsx");

const parseXlsx = () => {
    try {
        let data = [];
        const file = reader.readFile("./input/report.xlsx");
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