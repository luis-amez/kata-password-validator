export function isPasswordSafe(password: string) {
  const MINIMUM_PASSWORD_LENGTH = 6;
  return (
    lengthEqualOrGreaterThan(password, MINIMUM_PASSWORD_LENGTH) &&
    containsDigit(password) &&
    containsUpperCase(password) &&
    containsLowerCase(password) &&
    containsUnderscore(password)
  );
}

function lengthEqualOrGreaterThan(password: string, length: number) {
  return password.length >= length;
}

function containsDigit(password: string) {
  return /\d/.test(password);
}

function containsUpperCase(password: string) {
  return /[A-Z]/.test(password);
}

function containsLowerCase(password: string) {
  return /[a-z]/.test(password);
}

function containsUnderscore(password: string) {
  return /_/.test(password);
}
