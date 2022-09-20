const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password");


togglePassword.addEventListener('click' , function(e) {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});
const form = document.querySelector("form");
form.addEventListener('submit' , function(e){ 
    e.preventDefault();
});

