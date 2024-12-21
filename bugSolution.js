function foo(a, b) {
  //Explicit type conversion before arithmetic operations
  a = parseInt(a);
  b = parseInt(b);
  return a + b; 
}
console.log(foo(1, "1")); // Output: 2
console.log(foo(1, 1)); // Output: 2