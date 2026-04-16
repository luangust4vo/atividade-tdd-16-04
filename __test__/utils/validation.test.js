describe("validation", () => {
  test("should reject password with less than 8 characters", () => {
    const password = "short";
    const isValid = validatePassword(password);
    expect(isValid).toBe(false);
  });
});
