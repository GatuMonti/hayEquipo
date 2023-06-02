document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var emailUsuario = document.getElementById("email-usuario").value;
    var contrasenia = document.getElementById("contraseña").value;
  
    // Aqui puedes agregar la lógica de autenticacion y acciones correspondientes
    
    console.log("Email o Usuario: " + emailUsuario)
});
