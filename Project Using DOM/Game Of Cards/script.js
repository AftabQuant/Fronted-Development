let box1 = document.getElementById("box1");

let s = ""
box1.addEventListener("click", function() {
    s += `<div class="box" id="box1">
                <img src="image1.jpg">
            </div>`;
})

box1.innerHTML = s;

box1.addEventListener("mouseleave", function() {
    
})