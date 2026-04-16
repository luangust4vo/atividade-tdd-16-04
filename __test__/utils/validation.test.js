import { validatePassword } from "../../src/utils/validation";

describe("validation", () => {
  test("should reject password with less than 8 characters", () => {
    const password = "short";
    const isValid = validatePassword(password);
    expect(isValid).toBe(false);
  });

  test("should reject password without at least 1 upper letter", () => {
    const password = "lowercase1";
    const isValid = validatePassword(password);
    expect(isValid).toBe(false);
  });

  test("should reject password without at least 1 lower letter", () => {
    const password = "UPPERCASE1";
    const isValid = validatePassword(password);
    expect(isValid).toBe(false);
  });
});
