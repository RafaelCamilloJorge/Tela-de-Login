const masculino = document.getElementById('masculino');
const feminino = document.getElementById('feminino');
const login = document.getElementById('name');
const pass = document.getElementById('password');
const confirmPass = document.getElementById('confirmPassword');
const cidade = document.getElementById('cidade');
const pais = document.getElementById('país');
const registrar = document.getElementById('enviar');
const sexo = document.getElementById('sexo');
const wrongPassword = document.getElementById('wrongPassword');
const passwords = document.getElementById('passwords');
const voltarLogin = document.getElementById('voltarLogin');
const span = document.getElementById('span');
const nome = localStorage.getItem('login');
const form = document.getElementById('form');
var x = 0;
var y = 0;


function register(){
    if(login.value != '' && pass.value != '' && confirmPass.value != '' && cidade.value != '' && pais.value != ''){
        if(x > 0 || y > 0){
            if(pass.value == confirmPass.value)
                registrar.disabled = false;
        }
    }
    else{
        registrar.disabled = true;
    }
}

function validaSenhas(){
    if(pass.value != confirmPass.value){
        registrar.disabled = true;
        wrongPassword.style.display = 'block';
        pass.style.border = '2px solid red';
        confirmPass.style.border = '2px solid red';

    }
    else{
        registrar.disabled = false;
        wrongPassword.style.display = 'none';
        pass.style.border = 'none';
        confirmPass.style.border = 'none';
    }
}



function armazenaConta(){
    var newID = Number(localStorage.getItem('id'));
    if(localStorage.getItem('id') == null){
        localStorage.setItem('id', 1);
        console.log(newID + 1);
        localStorage.setItem('nome' + Number(newID + 1), login.value);
        localStorage.setItem('senha' + Number(newID + 1), pass.value);
    }
    if(localStorage.getItem('id') >= 0){
        localStorage.getItem('id');

        localStorage.setItem('id', newID + 1);
        console.log(newID + 1);
        localStorage.setItem('nome' + Number(newID + 1), login.value);
        localStorage.setItem('senha' + Number(newID + 1), pass.value);
    }
}




registrar.addEventListener('click', ()=>{
    span.innerHTML = ('Conta Criada Com Sucesso! bem vindo <br>' + login.value).toUpperCase();
    span.style.display = 'block';
    registrar.style.display = 'none';
})

document.addEventListener("keypress", e =>{
    if(e.key == 'Enter'){
      registrar.click();
    }
  });


confirmPass.addEventListener('input', validaSenhas);

pass.addEventListener('input', validaSenhas);

document.addEventListener('input', register);


registrar.addEventListener('click', armazenaConta);

masculino.addEventListener('click', function(){
    y++;
})

feminino.addEventListener('click', function(){
    x++;
})


voltarLogin.addEventListener('click', function(){
    window.location.href= "login.html" ;
});