console.log("Hello i am from javascript file.");

let x = document.querySelectorAll(".yes");
console.log(x);

// Change CSS
let y = document.querySelector("h2")
console.log(y)
y.style.color = "red";
y.style.fontFamily = "Gill Sans";

// Change HTML
y.innerHTML = "Hello changed."

// Even Listener
setTimeout(function() {
    y.innerHTML = "Print the hello after 5 sec.";
}, 5*1000);


setTimeout(function() {
    y.style.color = "blue";
    y.style.backgroundColor = "yellow";
}, 5*1000);