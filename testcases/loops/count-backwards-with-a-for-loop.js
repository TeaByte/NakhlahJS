if (code.includes('for (let i = 10; i > 0; i -= 2) {')) { // TODO: convert to regex
  isPass = true;
} else {
  isPass = false;
  msg = 'The code is not a for loop that counts backwards.';
}