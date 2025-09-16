document.getElementById("submit").addEventListener("click", () =>  {
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    if(isNaN(price) || isNaN(quantity) || price <=0 || quantity <=0) {
        alert("Please enter valid input")
        return;
    }

    let total = price * quantity;

    document.getElementById("total").value = total.toFixed(2);
})