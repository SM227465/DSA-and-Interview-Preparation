const palindrome = require('./index');

describe('checking a string if it is palindrome or not', () => {
  it('should return true if palindrome function is defined', () => {
    expect(palindrome).toBeDefined();
  });

  it('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
  });

  it('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
  });

  it('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
  });

  it('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
  });

  it('"1000000001" is a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
  });

  it('"Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
  });

  it('"pennep" is a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy();
  });
});
