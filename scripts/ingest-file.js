const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);
const localStorage = require("./utils/local-storage");

const ingestFile = () => {
    try {
        if(args.length < 1) {
            throw new Error(`1 argument is missing`);
        }
        const file = args[0];
        if (fs.existsSync(file)) {
            localStorage.setItem("fileName", file);
            const ext = path.extname(file);
            const response = ext === ".xlsx" ? "Success" : "Error";
            console.log(response);
        } else {
            throw new Error("File not found");
        }
    } catch(error) {
        console.log(`Error: ${error.message}`);
    }
}

ingestFile();