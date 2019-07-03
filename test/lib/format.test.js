import { phone } from "../../src/javascripts/lib/format";

describe("format", () => {
  describe("phone", () => {
    it("formats the numbers correctly", () => {
      expect(phone("9179749405", "US")).toEqual("(917) 974-9405");
      expect(phone("19179749405", "US")).toEqual("(917) 974-9405");
      expect(phone("+19179749405", "US")).toEqual("+1 917-974-9405");
      expect(phone("+31619503229", "NL")).toEqual("+31 6 19503229");
      expect(phone("619503229", "NL")).toEqual("06 19503229");
    });
  });
});
