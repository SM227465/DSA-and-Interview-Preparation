// Prime Number - Any whole number greater than 1 that is divisible only by 1 and itself, is defined as a prime number.

// List of Numbers	    Prime Numbers
// Between 1 and 10	    2, 3, 5, 7
// Between 11 and 20	  11, 13, 17, 19
// Between 21 and 30	  23, 29
// Between 31 and 40	  31, 37
// Between 41 and 50	  41, 43, 47
// Between 51 and 100	  53, 59, 61, 67, 71, 73, 79, 83, 89, 97

function isPrime(number) {
  // corner case - number should be greater than 1
  if (number <= 1) {
    return false;
  }

  // Check from 2 to n-1
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

// Find prime numbers in a range
function showPrimes(limit) {
  for (let number = 0; number <= limit; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

showPrimes(100);

module.exports = isPrime;
