let box = document.getElementById("box");
let main = document.getElementById("outer-box");

main.addEventListener("mousemove", (event) => {
    let rect = main.getBoundingClientRect();
    let x = event.x - rect.left - box.offsetWidth / 2;
    let y = event.y - rect.top - box.offsetHeight / 2;

    box.style.left = x + "px";
    box.style.top = y + "px";
});
