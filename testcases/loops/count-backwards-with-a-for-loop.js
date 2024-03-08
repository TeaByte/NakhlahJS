// for (let i = ___; i > ___; i -= ___) {
//   console.log(i);
// }
if (code.include('for (let i = 10; i > 0; i -= 2) {'))  { // TODO: convert to regex
  isPass = true;
} else {
  isPass = false;
 feedback = 'The code is not a for loop that counts backwards.';
}