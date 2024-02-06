let participantes=[]
let value= Number
let nome
let num= Number
//contador
for(let i=0 ; i<100; i++){
    participantes[i]= "Numero vago"
}

document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o refresh da página
    document.getElementById("error").innerHTML = "";

    num = document.getElementById("valueInput").value;
    nome = document.getElementById("nameInput").value;
    if(num>=100){
        document.getElementById("error").innerHTML= "Número inválido."
    }
    if(participantes[num]=="Numero vago"){
         participantes[num]= nome

      }else if(participantes[num] !="Numero vago" && num<100){
        document.getElementById("error").innerHTML = "O número escolhido já foi utilizado, escolha outro número."
      }

    // Limpa os campos
    document.getElementById("nameInput").value = "";
    document.getElementById("valueInput").value = "";
    
});

function ganhador(){
    //campeão
    let numSorteado=prompt(`Digite abaixo o numero sorteado`)
    document.getElementById("vencedor").innerHTML= "N°" + numSorteado +" - " + participantes[numSorteado]
    }
    console.log(participantes)
