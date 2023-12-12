// Gerando assentos
const assentosTotais = 68;
const assentos = new Array(assentosTotais).fill(null);

// LocalStorage
const assentosSalvos = JSON.parse(localStorage.getItem('assentos'));
if (assentosSalvos) {
    assentos = assentosSalvos;
    exibirListagemAssentos();
}

// Função de escolher assento
function atribuirAssento() {
    const nomePassageiro = document.getElementById('nomePassageiro').value;

    // Procurar por assento vago
    const assentoDisponivel = assentos.findIndex(assento => assento === null);

    if (assentoDisponivel !== -1) {
        // Atribuir assento
        assentos[assentoDisponivel] = nomePassageiro;

        // Salvar no LocalStorage
        localStorage.setItem('assentos', JSON.stringify(assentos));

        // Exibir listagem atualizada
        exibirListagemAssentos();

        alert(`Assento atribuído com sucesso! Assento: ${assentoDisponivel + 1}`);
    } else {
        alert('Não há assentos disponíveis.');
    }
}

// Função de listagem de assentos
function exibirListagemAssentos() {
    const listaAssentosElement = document.getElementById('listaAssentos');
    listaAssentosElement.innerHTML = '';

    for (let i = 0; i < assentosTotais; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Assento ${i + 1}: ${assentos[i] ? assentos[i] : 'Vazio'}`;
        listaAssentosElement.appendChild(listItem);
    }
}