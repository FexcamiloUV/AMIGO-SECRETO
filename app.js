// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaDeAmigos = [];
const listaHTML = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

 

function agregarAmigo() {
    let amigos = document.getElementById("amigo").value;

    if (amigos == ''){
        alert('Por favor, inserte un nombre');
        return;
    } else{
        listaDeAmigos.push(amigos);
        
        let li = document.createElement('li');
        li.textContent = amigos;
        listaHTML.appendChild(li);
    }
    limpiarCaja(); 
}

function sortearAmigos(){
    if(listaDeAmigos <= 1){
        alert('No se puede realizar el sorteo');
    } else {
        let indice = Math.floor(Math.random() * listaDeAmigos.length);
        let ganador = listaDeAmigos[indice];
        resultado.textContent = `El ganador es: ${ganador}`;
        listaDeAmigos.splice(indice, 1);
        listaHTML.removeChild(listaHTML.childNodes[indice]);
    }

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}