let sq1 = document.getElementById("box1");

sq1.addEventListener('mouseenter', function() {
    let num = Math.floor(Math.random()*100);
    sq1.innerHTML = `<h1>${num}</h1>`;
})
sq1.addEventListener('mouseleave', function() {
    sq1.style.backgroundColor = "white";
    sq1.innerHTML = `<h1> 1 </h1>`
})

let sq2= document.getElementById("box2");

let flag = 0;
sq2.addEventListener('mouseenter', function() {
    if(flag == 0) {
        sq2.style.backgroundColor = "red";
        flag = 1;
    }
    else if(flag == 1) {
        sq2.style.backgroundColor = "blue";
        flag = 2;
    }
    else {
        sq2.style.backgroundColor = "green";
        flag = 0;
    }
})

sq2.addEventListener('mouseleave', function() {
    sq2.style.backgroundColor = "white";
    sq2.innerHTML = `<h1> 2 </h1>`
})


let sq3 = document.getElementById("box3");

sq3.addEventListener('mouseenter', function() {
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    sq3.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    sq3.innerHTML = `<h1> ${Math.floor(Math.random()*100)} </h1>`
})
sq3.addEventListener('mouseleave', function() {
    sq3.style.backgroundColor = "white";
    sq3.innerHTML = `<h1> 3 </h1>`
})


let sq4 = document.getElementById("box4");

sq4.addEventListener('click', function() {
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    sq1.style.backgroundColor = `rgb(${a}, 255, 255)`;
    sq2.style.backgroundColor = `rgb(255, 255, ${c})`;
    sq3.style.backgroundColor = `rgb(255, ${b}, 255)`;
})

sq4.addEventListener('mouseleave', function() {
    sq1.style.backgroundColor = 'white';
    sq2.style.backgroundColor = 'white';
    sq3.style.backgroundColor = "white";
    sq3.innerHTML = `<h1> 4 </h1>`
})

let crsr = document.getElementById("cursor");
let main = document.getElementById("main");

main.addEventListener("mousemove", function(details) {
    console.log(details.x, details.y);
    crsr.style.left = details.x + "px";
    crsr.style.top = details.y + "px";
})