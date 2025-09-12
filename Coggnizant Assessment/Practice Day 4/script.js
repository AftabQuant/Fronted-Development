let sq1 = document.getElementById("sq1");
sq1.addEventListener("mouseenter", () => {
    let num = Math.floor(Math.random()*100);
    sq1.innerHTML = `<h1> ${num} </h1>`;
    sq1.style.borderRadius = '20px';
})
sq1.addEventListener("mouseleave", () => {
    sq1.innerHTML = `<h1> 1 </h1>`;
    sq1.style.borderRadius = '0px';
})

let sq2 = document.getElementById("sq2");
let flag = 0;
sq2.addEventListener("mouseenter", () => {
    sq2.style.borderRadius = '20px';
    if(flag == 0) {
        sq2.style.backgroundColor = "red";
        flag = 1;
    }
    else if(flag == 1) {
        sq2.style.backgroundColor = "green";
        flag = 2;
    }
    else if(flag == 2) {
        sq2.style.backgroundColor = "blue";
        flag = 0;
    }
})
sq2.addEventListener("mouseleave", () => {
    sq2.style.backgroundColor = "white";
    sq2.style.borderRadius = '0px';
})

let sq3 = document.getElementById("sq3");
sq3.addEventListener("mouseenter", () => {
    let num = Math.floor(Math.random()*100);
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    sq3.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    sq3.innerHTML = `<h1> ${num} </h1>`; 
    sq3.style.borderRadius = '20px';
})
sq3.addEventListener("mouseleave", () => {
    sq3.style.backgroundColor = "white";
    sq3.style.borderRadius = '0px';
})

let sq4 = document.getElementById("sq4");
sq4.addEventListener("click", () => {
    sq4.style.borderRadius = '50%';
    let a = Math.floor(Math.random()*255);

    sq1.style.backgroundColor = `rgb(${a}, 0, 0)`;
    sq2.style.backgroundColor = `rgb(0, ${a}, 0)`;
    sq3.style.backgroundColor = `rgb(0, 0, ${a})`;
    sq4.style.backgroundColor = "red";
})
sq4.addEventListener("mouseleave", () => {

    sq1.style.backgroundColor = "white";
    sq2.style.backgroundColor = "white";
    sq3.style.backgroundColor = "white";
    sq4.style.borderRadius = '0px';
})
