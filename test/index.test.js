const { print } = require("../src/print/index.js");

test("Teste da função Print", () => {
    const valueToPrint = "teste";
    const result = print(valueToPrint);

    expect(valueToPrint).toBe(result);
});
