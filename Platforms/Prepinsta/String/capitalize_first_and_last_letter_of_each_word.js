function capitalizeFirstAndLast(str) {
  const words = str.split(" ");
  const result = [];

  for (let word of words) {
    if (word.length === 1) {
      result.push(word.toUpperCase());
    } else {
      const first = word[0].toUpperCase();
      const last = word[word.length - 1].toUpperCase();
      const middle = word.slice(1, -1);

      result.push(first + middle + last);
    }
  }

  return result.join(" ");
}

console.log(capitalizeFirstAndLast("a hello world typescript"));
