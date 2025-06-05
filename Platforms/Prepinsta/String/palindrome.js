function isPalindrome(str) {
  const cleanedString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("No lemon, no melon"));
