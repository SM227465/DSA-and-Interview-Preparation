const isPrime = require('./index');

describe('Prime numbers checking', () => {
  test('isPrime function is defined', () => {
    expect(typeof isPrime).toEqual('function');
  });

  test('0 is not a prime number', () => {
    const result = isPrime(0);
    expect(result).toBeFalsy();
  });

  test('1 is not a prime number', () => {
    const result = isPrime(1);
    expect(result).toBeFalsy();
  });

  test('2 is a prime number', () => {
    const result = isPrime(2);
    expect(result).toBeTruthy();
  });

  test('3 is a prime number', () => {
    const result = isPrime(3);
    expect(result).toBeTruthy();
  });

  test('4 is not a prime number', () => {
    const result = isPrime(4);
    expect(result).toBeFalsy();
  });

  test('5 is a prime number', () => {
    const result = isPrime(5);
    expect(result).toBeTruthy();
  });

  test('6 is not a prime number', () => {
    const result = isPrime(6);
    expect(result).toBeFalsy();
  });

  test('7 is a prime number', () => {
    const result = isPrime(7);
    expect(result).toBeTruthy();
  });

  test('8 is not a prime number', () => {
    const result = isPrime(8);
    expect(result).toBeFalsy();
  });

  test('9 is not a prime number', () => {
    const result = isPrime(9);
    expect(result).toBeFalsy();
  });
});
