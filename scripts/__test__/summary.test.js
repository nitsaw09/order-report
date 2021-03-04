describe("Summary", () => {
  beforeEach(() => {
    jest.resetModules();
    global.console = {
      log: jest.fn()
    }
  });
  describe("Throw error on missing arguments", () => {
    beforeEach(() => {
      process.argv = ["node", "jest", "Produce", "2018"];
      require("../summary");
    });
    it("should show error message", () => {
      expect(console.log).toHaveBeenCalledWith("Error: 1 argument is missing");
    });
  });

  describe("Pass all arguments", () => {
    beforeEach(() => {
      process.argv = ["node", "jest", "Produce", "2018", "11"];
      require("../summary");
    });
    it("should show the summary details", () => {
      expect(console.log).toHaveBeenCalledWith("Produce - Total Units: 136503, Total Gross Sales: 1508297.4499999997");
    });
  });
});