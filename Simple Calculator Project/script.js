let sq = document.querySelectorAll(".sq");
let output = document.getElementById("output");
let display = document.getElementById("display");

let exp = "";
sq.forEach(function(ele) {
    ele.addEventListener("click", () => {
        let value = ele.innerText;
        
        if(value === 'Ac') {
            exp = "";
            display.innerText = "0";
        }
        else if(value === '=') {
            let res = eval(exp);
            display.innerText = res;
            exp = res.toString();
        }
        else {
            exp += value;
            display.innerText = exp;
        }

        ele.style.backgroundColor = "red";
        
    })


    ele.addEventListener("mouseleave", () => {
        ele.style.backgroundColor = "white";
    })
})
