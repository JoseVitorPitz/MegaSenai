let participantes = []
let value = Number
let nome
let num = Number
let lista = JSON.parse(localStorage.getItem("lista")) || []

atualizarLista()

function atualizarLista() {
    document.getElementById("lista").innerHTML = lista.join("<br>")
}

//contador
for (let i = 0; i < 100; i++) {
    participantes[i] = "Numero vago"
}

document.getElementById("inputForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o refresh da página
    document.getElementById("error").innerHTML = "";

    num = document.getElementById("valueInput").value;
    nome = document.getElementById("nameInput").value;

    if (num >= 100 || num < 0) {
        document.getElementById("error").innerHTML = "Número inválido."
    }
    if (participantes[num] == "Numero vago" && num >= 0) {
        participantes[num] = nome
        //armazenar o historico de cadastro
        lista.push(num + " - " + nome)

    } else if (participantes[num] != "Numero vago" && num < 100 && num >= 0) {
        document.getElementById("error").innerHTML = "O número escolhido já foi utilizado, escolha outro número."
    }

    // armazenar participantes
    localStorage.setItem("Nome participante", JSON.stringify(participantes))
    let string = JSON.parse(localStorage.getItem("Nome participante")) || []
    console.log(string)
    // Limpa os campos
    document.getElementById("nameInput").value = "";
    document.getElementById("valueInput").value = "";
    //Aparecer o histórico de cadastro
    localStorage.setItem("lista", JSON.stringify(lista))
    // document.getElementById("lista").innerHTML=lista.join("<br>")
    atualizarLista()
});

//Sorteador
let valorFinal = Math.floor(Math.random() * 100)
console.log(valorFinal)
function ganhador() {
    document.getElementById("vencedor").innerHTML = "N°" + valorFinal + " - " + participantes[valorFinal]
}