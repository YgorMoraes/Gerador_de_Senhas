let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVW0123456789!@#$%¨&*()_+=§-¬¢£³²¹";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
  sizePassword.innerHTML = this.value;
}

function generatePassword(){
  
  let pass = "";

  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove('hide');
  Password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword(){
  navigator.clipboard.writeText(novaSenha);
  alert('Senha copiada com sucesso!');
}