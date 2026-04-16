import { validatePassword } from "../../src/utils/validation";
import testCases from "../data/validation.json";

describe("validation", () => {
  testCases.forEach(({ description, input, expected }) => {
    test(description, () => {
      const isValid = validatePassword(input.password);
      expect(isValid).toBe(expected.valid);
    });
  });
});
