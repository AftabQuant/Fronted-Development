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
    let email = document.getElementById("email").value.trim()
    let pass = document.getElementById("password").value


    if(!isValidEmail(email)) {
        alert("Wrong email");
        return;
    }

    if(!isValidPassword(pass)) {
        alert("Wrong password");
        return;
    }
    
    alert("Login Successfully");
})