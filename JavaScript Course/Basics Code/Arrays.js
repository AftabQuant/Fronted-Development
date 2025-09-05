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

br = [[1,2,3], [4,5,6], [7,8,9]]
console.log(br[0])