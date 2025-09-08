let sq1 = document.getElementById("sq1")

// sq1.style.backgroundColor = "blue";gi

sq1.addEventListener('mouseenter', function() {
    let num = Math.floor(Math.random()*100);
    sq1.innerHTML = `<h1>${num}</h1>`;
})

sq1.addEventListener("mouseleave", function() {
    sq1.style.backgroundColor = "white";
})
