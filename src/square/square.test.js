const square = require("./square");

describe("validate", () => {
  let mockValue;
  beforeEach(() => {
    mockValue = Math.random();
  });
  beforeAll(() => {});
  test("Корректное значение", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test("Корректное значение", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
