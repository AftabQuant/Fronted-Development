let x = document.getElementById("ele1");

console.log(x);

x.addEventListener("click", function() {
    x.style.color = "white";
    x.style.fontWeight = "bolder";
    x.style.backgroundColor = "red";
})

x.addEventListener("mouseleave", function() {
    x.style.color = "black";
    x.style.backgroundColor = "white";
})

let y = document.getElementById("ele2");

let z = document.getElementById("ele3");

z.addEventListener("mouseenter", function() {
    z.style.color = "green";
    z.style.fontWeight = "bolder";
    z.style.backgroundColor = "orange";
})

z.addEventListener("mouseleave", function() {
    z.style.color = "black";
    z.style.backgroundColor = "white";
})

let a = document.getElementById("ele4");

z.addEventListener("click", function() {
    a.style.color = "white";
    a.style.backgroundColor = "purple";
})


a.addEventListener("click", function() {
    x.innerHTML = "After changed hello world1";
    x.style.backgroundColor = "purple";
    x.style.color = "white";
    y.innerHTML = "After changed hello world2";
    y.style.backgroundColor = "purple";
    y.style.color = "white";
    z.innerHTML = "After changed hello world2";
    z.style.backgroundColor = "purple";
    z.style.color = "white";
})
