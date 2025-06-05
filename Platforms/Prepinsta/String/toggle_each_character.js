function toggleCase(str) {
  let result = ''

  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      result = result + char.toUpperCase()
    } else if (char >= 'A' && char <= 'Z') {
      result = result + char.toLowerCase()
    } else {
      result = result + char
    }
  }

  return result
}

console.log(toggleCase('Hello World! 123'))