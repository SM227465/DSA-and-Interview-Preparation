const reverse = require('./index');

describe('Reverse of a string', () => {
  it('should return true if function is defined', () => {
    expect(reverse).toBeDefined();
  });

  it('should return reverse of a given string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  it('should return reverse of a given string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
});
