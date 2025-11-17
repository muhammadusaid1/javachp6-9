const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = "";

  for (let i = 0; i < 12; i++) {  // Fixed length = 12
    pass += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordField.value = pass;
}

generateBtn.addEventListener("click", generatePassword);
