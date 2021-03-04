const args = [
    {
        cmd: ['node', 'jest', './input/report.xlsx'],
        desc: "Pass valid file in argument",
        res: "Success"
    },
    {
        cmd: ['node', 'jest', './input/report.txt'],
        desc: "Throw error for invalid file in argument",
        res: "Error"
    },
    {
        cmd: ['node', 'jest', './input/report.csv'],
        desc: "Throw error for non existing file",
        res: "Error: File not found"
    },
    {
        cmd: ['node', 'jest'],
        desc: "Throw Error for no argument",
        res: "Error: 1 argument is missing"
    }
];

describe('Ingest the file', () => {
    beforeEach(() => {
        jest.resetModules();
        global.console = {
            log: jest.fn()
        }
    });

    args.forEach(({cmd, desc, res}) => {
        describe(desc, () => {
            beforeEach(() => {
                process.argv = cmd;
                require("../ingest-file");
            });
            it(`should print - ${res}`, () => {
                expect(process.argv.slice(2)).toEqual(cmd.splice(2));
                expect(console.log).toHaveBeenCalledWith(res);
            });
        });
    });
});
