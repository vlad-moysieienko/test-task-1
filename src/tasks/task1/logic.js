export function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
