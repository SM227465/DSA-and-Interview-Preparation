/*
Write a function reverseWords that takes a sentence string as input and returns a new string where each word is reversed, but the order of the words remains the same.

Words are separated by spaces.
Preserve the original spacing.


Constraints & Edge Cases:

Input is always a string.
Words are defined by space characters.
Multiple spaces between words should be preserved.
Leading/trailing spaces should also be preserved.
An empty string should return an empty string.
*/




reverseWords("Hello World")        // → "olleH dlroW"
reverseWords("JavaScript is fun")  // → "tpircSavaJ si nuf"
reverseWords(" Lead and Trail ")   // → " daeL dna liarT "
reverseWords("")                   // → ""
reverseWords("OneWord")            // → "droWenO"