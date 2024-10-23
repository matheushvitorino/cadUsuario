$(document).ready(function(){
  $('#cadUsuario').on("submit", function(event){
    event.preventDefault();
    let isValid = true;

    $(".error").text("");

    if ($("#nome").val().trim() === ""){
      $("#nome").next(".error").text(" Insira um nome.");
      isValid = false;
    }

    if ($("#sobrenome").val().trim() === ""){
      $("#sobrenome").next(".error").text(" Insira um sobrenome.");
      isValid = false;
    }
    
    const email = $("#email").val().trim() 
    if (email === ""){
      $("#email").next(".error").text(" Insira um email.");
      isValid = false;
    }else{
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)){
        $("#email").next(".error").text(" Insira um email valido.");
        isValid = false;
      }
    }

    const senha = $("#senha").val()
    if (senha.length  < 6){
      $("#senha").next(".error").text(" A senha deve conter no minimo 6 caracteres.");
      isValid = false;
    }

    const cep = $("#cep").val()
    if (cep.length < 8){
      $("#cep").next(".error").text(" O cep deve conter 8 caracteres.");
      isValid = false;
    }

    if ($("#numero").val().trim() === ""){
      $("#numero").next(".error").text(" Insira um numero.");
      isValid = false;
    }
    if (isValid){
      alert("Form validado");
    }

  });
});