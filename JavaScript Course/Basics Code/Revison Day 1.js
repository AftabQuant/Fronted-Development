// console.log("Hello World");
// console.log(5);
// console.log('5');
// console.log(5 + 5 + '5');


// var a = 10;
// console.log(a);
// a = 78.9;
// console.log(a);
// a *= 5
// console.log(a)

// var name = "aftab";
// age = 21;
// console.log(name, age)

// console.log(typeof name);
// console.log(typeof age);

// num = 29;
// if(num%2 == 0) {
//     console.log(`${num} is even number.`);
// }
// else {
//     console.log(`${num} is odd number.`);
// }

// var a = 5;
// var b = '5';
// console.log(a == b);
// console.log(a === b);

// let i = 12;
// do {
//     console.log(i);
//     i++;
// } while(i <= 10)

// var arr = [1, 2, 3, 4, 5];
// console.log(arr, " ", arr.length);

// var brr = [1, 2, 3.5, "Aftab", [7,8,9]];
// console.log(brr, " ", brr.length);

// arr.push(100);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(100);
// console.log(arr);

// arr.shift(100);
// console.log(arr);

// var crr = [5,4,3,2,1];
// console.log(crr.sort());

// var ar = [10, 2, 30, 4, 50, 6, 70, 8, 90, 100];

// for(let i=0; i<ar.length; i++) {
//     console.log(ar[i]);
// }

// for(let ele of ar) {
//     console.log(ele);
// }

// ar.forEach((ele, i) => {
//     console.log(ele, i)
// })

// var str = "I am Md Aftab Uddin";
// console.log(str, str.length);
// console.log(str[0], str.charAt(0));
// var ar = str.split();
// console.log(ar);
// console.log(str.concat(" and i am from singur"), str.length);

let obj = {
    name: "Md Aftab Uddin",
    age: 21,
    dept: "CSE-DS"
}

var ar = []
ar.push(obj);

console.log(obj);
console.log(ar);

console.log(obj.name);

for(let key in obj) {
    console.log(key, " : ", obj[key]);
}


// for(let i=1; i<=5; i++) {
//     var ar = []
//     for(let j=1; j<=i; j++) {
//         ar.push('*');
//     }
//     console.log(ar);
// }