let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
    return emailPattern.test(email);
}

let form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name.length >= 2 && isValidEmail(email)) {
        console.log("Successfully completed");
    }
    else console.log("Error messages");
})