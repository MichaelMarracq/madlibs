const addComma = require("./addComma");

describe("#addComma", () => {
  test("it is a function", () => {
    expect(typeof addComma).toBe("function");
  });

  test("it adds commas to an integer", () => {
    expect(addComma(123456789)).toBe("123,456,789");
  });

  test("it adds commas to a decimal number", () => {
    expect(addComma(9876543.21)).toBe("9,876,543.21");
  });

  test("it adds commas to a large integer", () => {
    expect(addComma(1234567890123456)).toBe("1,234,567,890,123,456");
  });
});
