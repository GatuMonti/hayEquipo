document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var emailUsuario = document.getElementById("email-usuario").value;
    var contraseña = document.getElementById("contraseña").value;
  
    // Aquí puedes agregar la lógica de autenticación y acciones correspondientes
    
    console.log("Email o Usuario: " + emailUsuario);