let squ = document.querySelectorAll(".sq");

squ.forEach(function (sq) {
    sq.addEventListener("click", () => {
        
        sq.style.backgroundColor = "aqua";

    })
})

squ.forEach( function(sq) {
    sq.addEventListener("mouseleave", () => {
        sq.style.backgroundColor = "white";
    })
})