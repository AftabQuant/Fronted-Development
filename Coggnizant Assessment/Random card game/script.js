let main = document.getElementById("main");

let s = "";
for(let i=1; i<=10; i++) {
    s += `<h1> hello World </h1>`;
}

main.innerHTML = s;