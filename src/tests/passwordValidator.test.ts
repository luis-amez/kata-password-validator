import { isPasswordSafe } from '../core/passwordValidator';

describe('isPasswordSafe', () => {
  it('fails if the password is not long enough', () => {
    const password = 'a1C_e';

    const result = isPasswordSafe(password);

    expect(result).toBe(false);
  });

  it('fails if the password does not contain at least one number', () => {
    const password = 'abC_ef';

    const result = isPasswordSafe(password);

    expect(result).toBe(false);
  });

  it('fails if the password does not contain at least one uppercase letter', () => {
    const password = 'a1c_ef';

    const result = isPasswordSafe(password);

    expect(result).toBe(false);
  });

  it('fails if the password does not contain at least one lowercase letter', () => {
    const password = 'A1C_EF';

    const result = isPasswordSafe(password);

    expect(result).toBe(false);
  });

  it('fails if the password does not contain an underscore', () => {
    const password = 'a1Cdef';

    const result = isPasswordSafe(password);

    expect(result).toBe(false);
  });

  it('succeeds if the password fulfills all the security criteria', () => {
    const password = 'a1C_ef';

    const result = isPasswordSafe(password);

    expect(result).toBe(true);
  });
});
