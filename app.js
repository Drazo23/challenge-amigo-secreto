//variable amigo secreto
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("Debe ingresar un nombre");
        return; // evita que siga si no hay nombre
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    
    // limpiar input después de añadir
    inputAmigo.value = "";

    // borrar resultado si había uno
    ulResultado.innerHTML = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];

    // mostrar resultado
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    // limpiar input y lista después del sorteo
    inputAmigo.value = "";
    ulListaAmigos.innerHTML = "";
    listaAmigos.length = 0; // vacía el arreglo
}
