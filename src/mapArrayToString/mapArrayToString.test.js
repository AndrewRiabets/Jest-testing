const mapArrayToString = require("./mapArrayToString");

describe("validate", () => {
  test("Корректное значение", () => {
    expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Мешанина", () => {
    expect(mapArrayToString([1, 2, 3, null, undefined, "asda"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Пустой массив", () => {
    expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
