const parseXlsx = require('./utils/parse-xlsx');
const writeCsv = require('./utils/write-csv');
const args = process.argv.slice(2);

const writeToCSVFile = () => {
    try {
        if(args.length < 1) {
            throw new Error(`1 argument is missing`);
        }
        const filename = args[0];
        const data = fetchData();
        writeCsv(filename, data);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
  
const fetchData = () => {
    try {
        const data = parseXlsx();
        let header = ["Year, Month, SKU, Category, Units, Gross Sales"];
        let rows = [];
        let rIndex = 0;
        if(data.length > 0) {
            let monthYear;
            let month;
            let year;
            let sku;
            let category;
            let units;
            let grossSales;
            data.forEach(d => { 
                for (const obj in d) {
                    if(obj.includes("Units") || obj.includes("Gross Sales")) {
                        const mYear = obj.split(" ")[0];
                        const sType = obj.split(" ")[1]
                        if(units && grossSales && monthYear !== mYear) {
                            monthYear = mYear;
                            rows[rIndex] = [`${year},${month},${sku},${category},${units},${grossSales}`];
                            rIndex++;
                        }
                        if(sType === "Units") {
                            units = d[obj];
                        } else {
                            grossSales = d[obj];
                        }
                        month = mYear.split("-")[0];
                        year = mYear.split("-")[1];
                    } 
                    if(obj.includes("SKU")) {
                        sku = d[obj];
                    }
                    if(obj.includes("Section")) {
                        category = d[obj];
                    }
                }
            });
        }
        return header.concat(rows).join("\n");
    } catch(error) {
        throw new Error(error.message);
    }
}

writeToCSVFile();