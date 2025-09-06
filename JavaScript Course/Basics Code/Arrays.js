arr = [1, 2, 3, 4, 5];
console.log(arr);


// For of loop
for(let ele of arr) {
    console.log(ele);
}

// For each loop
arr.forEach((ele, i) => {
    console.log(ele, i);
});


arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(100);
console.log(arr);

arr.shift(100);
console.log(arr);

brr = [[1,2,3], [4,5,6], [7,8,9]]
console.log(brr[0])

// Sorting 

let ar = [1, -9, -2, 2, 3];
console.log(ar);

// ascending order
let br = ar.sort();
console.log(br);

// desending order
function fun(a, b) {
    return b-a;
}
let cr = ar.sort(fun);
console.log(br);

// Proper sorting 
let dr = ar.sort((a, b) => a-b);
console.log(dr);

// abs sorting
let er = ar.sort((a,b) => Math.abs(a) - Math.abs(b));
console.log(er);  // [ 1, -2, 2, 3, -9 ]