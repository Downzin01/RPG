// Função para exibir texto gradualmente
export function exibirTextoGradualmente(texto, tempoDigito) {
    return new Promise((resolve) => {
        let index = 0;
        const elemento = document.createElement('div');
        elemento.className = 'popup';
        elemento.innerHTML = ''; // Mudar para innerHTML
        document.body.appendChild(elemento);

        // Cria um botão para permitir ao usuário pular a exibição do texto
        const botaoPular = criarBotaoPular(() => {
            clearInterval(interval);
            elemento.innerHTML = texto.replace(/\n/g, '<br>'); // Preenche imediatamente o texto e substitui quebras de linha
            removerBotaoPular(botaoPular);
            setTimeout(() => removerElemento(elemento, resolve), 500); // Aguarda um tempo para remover
        });

        // Adiciona um listener para a tecla Enter
        document.addEventListener('keydown', function aoPressionarEnter(event) {
            if (event.key === 'Enter') {
                botaoPular.click(); // Simula o clique no botão de pular
                document.removeEventListener('keydown', aoPressionarEnter); // Remove o listener após o uso
            }
        });

        const interval = setInterval(() => {
            if (index < texto.length) {
                // Adiciona a letra atual ao innerHTML, substituindo novas linhas
                elemento.innerHTML += texto[index] === '\n' ? '<br>' : texto[index];
                index++;
            } else {
                clearInterval(interval);
                removerBotaoPular(botaoPular);
                setTimeout(() => removerElemento(elemento, resolve), 500); // Tempo para leitura final
            }
        }, tempoDigito);
    });
}

// Função para criar um botão que permite pular a exibição do texto
function criarBotaoPular(callback) {
    const botaoPular = document.createElement('button');
    botaoPular.innerHTML = 'Pular  <kbd>Enter</kbd>';
    botaoPular.className = 'botao-pular';
    botaoPular.onclick = callback;
    document.body.appendChild(botaoPular);
    return botaoPular;
}

// Função para remover o botão de pular da página
function removerBotaoPular(botaoPular) {
    if (botaoPular && botaoPular.parentNode) {
        botaoPular.parentNode.removeChild(botaoPular);
    }
}

// Função para remover o elemento que exibe o texto e resolver a Promise
function removerElemento(elemento, resolve) {
    if (elemento && elemento.parentNode) {
        elemento.parentNode.removeChild(elemento);
    }
    resolve();
}
