let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
  
  if (!emailRegex.test(email)) {
    alert("Adresa de email este gresita!");
    return;
  }
  
  if (!passwordRegex.test(password)) {
    alert("Parola necesita cel putin:\n- un caracter lowercase si unul uppercase\n- cel putin un numar\n- un caracter special sau underscore\n- o lungime de minim 7 caractere");
    return;
  }
  
  alert("Login reușit!");
  window.location.href = "../html/loading.html";
});