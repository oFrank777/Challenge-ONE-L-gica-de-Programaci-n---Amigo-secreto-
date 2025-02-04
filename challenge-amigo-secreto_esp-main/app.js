let listaAmigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Debe agregar al menos un amigo antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}