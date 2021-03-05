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
      it("should throw error on incorrect file format", () => {
        try {
          parseXlsx("./input/report.txt");
        } catch(e) {
          expect(e.message).toMatch("File format is not valid");
        }
      });
      it("should throw error for incorrect path", () => {
        try {
          parseXlsx();
        } catch(e) {
          expect(e.message).toMatch("The \"path\" argument must be of type string");
        }
      });
  });
});