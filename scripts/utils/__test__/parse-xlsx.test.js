const parseXlsx = require("../parse-xlsx");

describe("Parse xlsx file", () => {
   describe("Read file and return data", () => {
      let data;
      beforeEach(() => {
        data = parseXlsx("./input/report.xlsx");
      });
      it("should return data", () => {
        expect(data.length).toBeGreaterThan(0);
        expect(data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({Section: "Produce"})
          ])
        );
      });
   });

   describe("Throw error", () => {       
      it("should throw error", () => {
        try {
            parseXlsx();
        } catch(e) {
            expect(e.message).toMatch("The \"path\" argument must be of type string");
        }
      });
  });
});