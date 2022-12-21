const login = document.getElementById('name');
const pass = document.getElementById('password');
const btn = document.getElementById('enviar');
const conteiner = document.getElementById('main-conteiner');
const eye = document.getElementById('eye');
const eye2 = document.getElementById('eye2');
const contaIncorreta = document.getElementById('conta-incorreta');



function enviar() {
    if (login.value === 'rafael' && pass.value === '123') {
        // exibe a tela de "conectado"
        document.body.innerHTML = '<h1>Conectado Com Sucesso!</h1>';

      } else {
        // exibe uma mensagem de erro
        contaIncorreta.style.display = 'block';
        login.style.border = '2px solid red';
        pass.style.border = '2px solid red';
      }
}


function validaBotao(){
  if(login.value == '' || pass.value == ''){
    btn.disabled = true;
  }
 else{
    btn.disabled = false;
  }
  }

  function showPass(){
    pass.type = 'text';
    eye.style.display = 'none';
    eye2.style.display = 'block';
  }

  function hidePass(){
    pass.type = 'password';
    eye.style.display = 'block';
    eye2.style.display = 'none';
  }

document.addEventListener("keypress", e =>{
    if(e.key == 'Enter'){
      btn.click();
    }
  });



eye.addEventListener('click', showPass);
eye2.addEventListener('click', hidePass);
document.addEventListener('input', validaBotao);
btn.addEventListener('click', enviar);


