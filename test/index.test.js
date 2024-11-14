const p = require("../src/print/index.js");

test("Teste da função Print", () => {
    const valueToPrint = "teste";
    const result = p.print(valueToPrint);

    expect(valueToPrint).toBe(result);
});
