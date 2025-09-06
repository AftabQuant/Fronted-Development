function add(a, b) {
    return a+b;
}

function eqn(a, b) {
    console.log(`${Math.pow(a,2) + 2*a*b + Math.pow(b,2)}`);
}

console.log(add(3, 4));
eqn(3,4);
console.log(Math.max(3, 10, 54, 3, 2));
console.log(Math.ceil(3.7));
console.log(Math.floor(4.6));

// Generate a number between 0 to 1.
console.log(Math.random(1, 10))

// Write a code to generate a random num b/w 0 and 9(included).
let randomNum = Math.floor(Math.random()*10);
console.log(randomNum);

// Write a code to generate a random num b/w -10 and 10(included).

randomNum = Math.floor(Math.random() * 21) - 10;
console.log(randomNum);