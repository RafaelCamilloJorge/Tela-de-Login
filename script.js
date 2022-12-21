var arr = [];

function armazenaNome(){
    if(localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }

    let novoItem = document.getElementById('login').value;
    arr.push(novoItem);
    localStorage.meuArr = JSON.stringify(arr);
}

function mostrarNome(){
    let resultDIV = document.getElementById('d');
    resultDIV.innerHTML = "";
    if(localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }


    for(var i in arr){
        console.log(arr[i]);
    }
}