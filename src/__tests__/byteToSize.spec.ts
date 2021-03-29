import byteToSize from "../byteToSize";

test("convert byte to size value", () => {
  expect(byteToSize(1500)).toBe("1.46 KB");
});