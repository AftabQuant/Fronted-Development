// function h() {
//     console.log("Hello");
// }

// setTimeout(h, 7*1000);
// setTimeout(function() {
//     console.log("Mello");
// }, 3*1000);

// function print(n) {
//     console.log(n);
//     setTimeout(2*1000);
// }

// for(let i=1; i<=10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 2*1000);
// }

// for(let i=1; i<=10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i*1000);
// }

// for(let i=1; i<=10; i++) {
//     setTimeout(function() {
//         console.log(11 - i);
//     }, i*1000);
// }

// Generate random number after every 5 sec.

for(let i=1; i<=10; i++) {
    setTimeout(function() {
        let x = Math.floor(Math.random() * 10);
        console.log(x);
    }, i*1000);
}