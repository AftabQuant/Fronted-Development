let ar = [1, 2, 3, 4, 5];
// console.log(ar);

// let br = []
// for(let i=0; i<ar.length; i++) {
//     br[i] = Math.pow(ar[i], 2);
// }
// console.log(ar);

// // Map =>
// function twice(ele) {
//     return Math.pow(ele, 2);
// }
// let cr = ar.map(twice);
// console.log(br);

// let dr = ar.map(ele => Math.pow(ele, 2));
// console.log(cr);

// Filter => 
// console.log(ar);
// function fun(ele) {
//     if(ele%2 == 0) console.log("Even");
//     else console.log("Odd");
// }
// let br = ar.filter(ele => ele%2==0);
// console.log(br);

// let cr = ar.filter(fun);
// console.log(cr);

// Reduce => 
let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

let ans = arr.reduce(function(a,b) {
    return a+b;
})

console.log(ans);

