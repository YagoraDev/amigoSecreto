//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigo = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    nomeAmigo.push(nome);
    
    atualizarLista();
    
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < nomeAmigo.length; i++) {
        let li = document.createElement("li");
        li.textContent = nomeAmigo[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (nomeAmigo.length === 0) {
        alert("Nenhum amigo disponível para sorteio.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * nomeAmigo.length);
    let amigoSorteado = nomeAmigo[indiceSorteado];
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
