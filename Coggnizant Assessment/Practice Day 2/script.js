let sq1 = document.getElementById("sq1")

sq1.addEventListener("mouseenter", ()=> {
    let ran = Math.floor(Math.random()*100);
    sq1.innerHTML = `<h1> ${ran} </h1>`;
})

sq1.addEventListener("mouseleave", () => {
    sq1.innerHTML = `<h1>1</h1>`;
})


let sq2 = document.getElementById("sq2")

let flag = 1
sq2.addEventListener("mouseenter", ()=> {
    if(flag==1){
        sq2.style.backgroundColor = "red";
        flag = 2;
    }
    else if(flag==2) {
        sq2.style.backgroundColor = "green";
        flag = 3;
    }
    else {
        sq2.style.backgroundColor = "blue";
        flag = 1;
    }
})

sq2.addEventListener("mouseleave", () => {
    sq2.style.backgroundColor = "white";
})

let circle = document.getElementById("circle");
let inside = document.getElementById("sq1");

inside.addEventListener("mousemove", (details) => {
    console.log(details.x, details.y);
    circle.style.top = details.y + "px";
    circle.style.left = details.x + "px";
})

circle.addEventListener("mouseleave", () => {
    circle.style.top = "50%";
    circle.style.left = "50%";
    circle.style.transform = "translate(-50%, -50%)";
})
