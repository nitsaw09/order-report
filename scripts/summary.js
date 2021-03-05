const parseXlsx = require("./utils/parse-xlsx");
const args = process.argv.slice(2);
const localStorage = require("./utils/local-storage");

const summary = () => {
    let result;
    const section = args[0];
    const year = args[1];
    const month = args[2];

    try {
        if(args.length < 3) {
            throw new Error(`${3 - args.length} argument is missing`);
        }
        const file = localStorage.getItem("fileName");
        const data = parseXlsx(file);
        result = data.reduce((product, item) => {
            const monthYear = `${year}-${month}`;
            const units = item[`${monthYear} Units`];
            const grossSales = item[`${monthYear} Gross Sales`];
            if(section === item["Section"] && units && grossSales) {
                product.totalUnits += units;
                product.totalGross += grossSales;     
            }
            return product;
        }, {
            totalUnits: 0,
            totalGross: 0
        });

        console.log(`${section} - Total Units: ${result.totalUnits}, Total Gross Sales: ${result.totalGross}`);
    } catch(error) {
        console.log(`Error: ${error.message}`);
    }
}

summary();