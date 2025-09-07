let main = document.getElementById("main");

let ar = [`image1.jpg`, `image2.jpg`, `image3.jpg`, `image4.jpg`, `image5.jpg`];
let s = ""
for(let i=1; i<=65; i++) {
    let num = Math.floor(Math.random()*ar.length);
    s += `<div class="cards"> <img src = ${ar[num]}></div>`;
}

main.innerHTML = s;