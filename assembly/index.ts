// declare function log(n: i32): void;

// export function minusOne(a: i32): i32 {
//   if (a == 0) {
//     abort();
//   }
//   log(a);
//   return a - 1;
// }

// export function fizbuzz(a: i32): string | null {
//   if (a % 15 == 0) {
//     return 'fizzbuzz';
//   }
//   if (a % 3 == 0) {
//     return 'fizz';
//   }
//   if (a % 5 == 0) {
//     return 'buzz';
//   }
//   return null;
// }

memory.grow(2);
store<i8>(0, 21);
store<i8>(1, 93);

export function readMemory(n: i32): i32 {
  return load<i8>(n);
}
