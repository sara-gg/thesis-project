import { isPasswordAllowed } from "../RegistrationForm";

describe("isPasswordAllowed tests", () => {
  const allowedPasswords = ["asdfl43jsdf"];
  const disallowedPasswords = ["", "kkkkk", "88888888"];

  allowedPasswords.forEach((pwd) => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true);
    });
  });

  disallowedPasswords.forEach((pwd) => {
    it(`"${pwd}" should not be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false);
    });
  });
});
