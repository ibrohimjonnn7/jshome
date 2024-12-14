 //1
// function myfunc(a){
//      if ( a == 0){
//         return a
//      }
// if(a % 2 != 0){
//     return a + myfunc(a - 1); 
// }
// else{
//     return myfunc(a - 1);
// }
// }
// console.log(myfunc(5));

//2

// function  myfunc (a){
//     let cnt = 0;
//     return b =>
//     {
//         if(b > cnt)
//         {
//             cnt = b;
//         }
//         return cnt
//     }
// }
// let myfunc2 = myfunc();
// console.log(myfunc2(10));
// console.log(myfunc2(20));

//3
// function myfunc(a){
//     if ( a <= 0) {
//       return 0
//     }

//    return a % 10 + myfunc(Math.floor(a/10))
// }
// console.log(myfunc(10030111));

//4

// function myfunc (a = 0){
//    return (b) => {
//       return a = a + b
//    }
// }
// let myfunc2 = myfunc ()
// console.log(myfunc2(3));
// console.log(myfunc2(5));
// console.log(myfunc2(8));

//5
// function  myfun (a = 0, c = 1){
//       return (b) => {
//          return a = (a + b)/c++
//       }
// }
// let myfunc2= myfunc()
// console.log(myfunc2(10));
// console.log(myfunc2(15));



// 7

//function myfunc(a, b) {
//     let c = a;
  
//     return function() {
//       let sum = c;
//       c += b;
//       return sum;
//     };
//   }
  
//   let myfunc2 = myfunc(0, 2); 
//   console.log(myfunc2()); 
//   console.log(myfunc2()); 
//   console.log(myfunc2());

// quiztime 1
let cnt = 1;
function myfunc(num) {
  if (num == 0) {
    return cnt;
  }
  cnt *= num;
  return myfunc(num - 1);
}
console.log(myfunc(5));

// quiztime 2

// function hello(a, b = 10) {
//   if (b == 1) {
//     return a * b;
//   }
//   return a * b + hello(a, b - 1);
// }
// console.log(hello(1));

// quiztime 3

// function hello(a, b) {
//   if (b == 0) {
//     return 1;
//   }
//   return a * hello(a, b - 1);
// }
// console.log(hello(2, 3));