function largestNumber(arr) {
  const numberAsString = arr.map((num) => num.toString());

  numberAsString.sort((a, b) => (b + a).localeCompare(a + b));

  if (numberAsString[0] === "0") {
    return "0";
  }
  return numberAsString.join("");
}

console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
console.log(largestNumber([54, 546, 548, 60])); // "6054854654"
console.log(largestNumber([0, 0, 0])); // "0"
console.log(largestNumber([1, 10, 100])); // "110100"
