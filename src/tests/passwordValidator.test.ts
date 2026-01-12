import { passwordValidator } from '../core/passwordValidator';

describe('passwordValidator', () => {
  it('should return true', () => {
    expect(passwordValidator()).toBe(true);
  });
});
