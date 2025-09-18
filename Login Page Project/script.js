function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
}

function isValidPassword(pass) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_#^])[A-Za-z\d@$!%*?&\-_#^]{8,}$/;
    return re.test(pass);
}

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("pass").value;

    if(!email || !password) {
        alert("Please fill the input");
        return;
    }
    if(!isValidEmail(email)) {
        alert("Enter valid email");
        return;
    }
    if(!isValidPassword(password)) {
        alert("Enter valid password");
        return;
    }

    alert("Login successfully.");
})