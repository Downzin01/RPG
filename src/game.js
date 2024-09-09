import Personagem from './classes/personagem.js';
import Locais from './classes/locais.js';
import { textos } from './textos.js';
import { exibirTextoGradualmente } from './utils/gerarTextoGradualmente.js';

export async function iniciarJogo() {
    try {
        // Narração inicial (descomentar para ativar)
        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicio1, 50);
        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicio2, 50);
        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicio3, 50);

        // Diálogo inicial
        await exibirTextoGradualmente(textos.acoes.incio.acordou, 50);
        await exibirTextoGradualmente(textos.falas.daisy.fala1, 50);
        await exibirTextoGradualmente(textos.falas.daisy.fala2, 50);

        // Solicita o nome do personagem
        let nome = prompt(textos.prompt.principal.informarNome);
        if (nome === null || nome === '') {
            nome = 'Enzo (O Pamonha)';
        }
        console.log(nome);

        await exibirTextoGradualmente(textos.falas.daisy.fala3.replace('{nome}', nome), 50);
        await exibirTextoGradualmente(textos.falas.daisy.fala4, 50);

        // Escolha da classe
        let classeEscolhida;
        let escolhaClasse;

        const classesValidas = ['1', '2', '3', 'Guerreiro', 'Mago', 'Arqueiro'];

        // Loop até que uma classe válida seja escolhida
        while (true) {
            escolhaClasse = prompt(textos.prompt.principal.escolhaClasse);
            // Verifica se o usuário clicou em "Cancelar"
            if (escolhaClasse === null) {
                continue; // Volta para o início do loop se "Cancelar" for pressionado
            }

            // Validação da escolha da classe
            if (classesValidas.includes(escolhaClasse.trim())) {
                break; // Sai do loop se a entrada for válida
            } else {
                alert('🙃 Escolha uma opção válida:');
            }
        }

        // Determina a classe escolhida
        switch (escolhaClasse.trim()) {
            case '1':
            case 'Guerreiro':
                classeEscolhida = 'Guerreiro';
                break;
            case '2':
            case 'Mago':
                classeEscolhida = 'Mago';
                break;
            case '3':
            case 'Arqueiro':
                classeEscolhida = 'Arqueiro';
                break;
        }

        // Criação do personagem
        let personagem = new Personagem(nome, classeEscolhida);

        await exibirTextoGradualmente(
            textos.falas.daisy.fala5.replace('{classe}', classeEscolhida),
            50
        );

        // Exibe os itens e atributos do personagem
        alert(
            `🎁 Você ganhou ${personagem.itens.length > 0 ? personagem.itens.map((item) => item.nome).join(' e ') : 'nada'}`
        );
        alert(
            `✨ Você sente sua força aumentando:\n\n    💥 ・ Ataque: ${personagem.ataque}\n    🧤 ・ Defesa: ${personagem.defesa}\n    ❤ ・ Vida: ${personagem.vida}`
        );

        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicioCaminhos1, 50);
        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicioCaminhos2, 50);

        const locais = new Locais();

        // Primeira escolha de caminho
        while (true) {
            let escolhaCaminho = prompt(textos.prompt.decisao);

            if (escolhaCaminho === '1' || escolhaCaminho.toLowerCase() === 'esquerda') {
                await locais.portaMisteriosa(personagem, textos);
                break;
            } else if (escolhaCaminho === '2' || escolhaCaminho.toLowerCase() === 'direita') {
                await locais.corredorEscuro(personagem, textos);
                break;
            }
        }

        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicioCaminhos1, 50);
        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicioCaminhos3, 50);

        // Segunda escolha de caminho
        while (true) {
            let escolhaCaminho = prompt(textos.prompt.decisao);

            if (escolhaCaminho === '1' || escolhaCaminho.toLowerCase() === 'esquerda') {
                await locais.refugioDoGlobin(personagem, textos);
                break;
            } else if (escolhaCaminho === '2' || escolhaCaminho.toLowerCase() === 'frente') {
                await locais.criptaDoEspectro(personagem, textos);
                break;
            }
        }

        await exibirTextoGradualmente(textos.narracao.inicio.narracaoInicioCaminhosFinal, 50);

        await locais.covilDoDragao(personagem, textos);
        await exibirTextoGradualmente(textos.narracao.inicio.narracaoFinalGame, 50);
        await exibirTextoGradualmente(textos.narracao.inicio.narracaoFim, 50);

        while (true) {
            let escolhaCaminho = prompt('Deseja jogar novamente? [S/N]');

            if (escolhaCaminho.toLowerCase() === 's' || escolhaCaminho.toLowerCase() === 'sim') {
                await iniciarJogo();
                break;
            } else if (
                escolhaCaminho.toLowerCase() === 'n' ||
                escolhaCaminho.toLowerCase() === 'não'
            ) {
                window.location.href =
                    'https://www.youtube.com/watch?v=psiY7oPK7VI&list=RDpsiY7oPK7VI&start_radio=1';
                break;
            }
        }
    } catch (error) {
        console.error('Erro ao iniciar o jogo:', error);
    }
}

// Inicia o jogo automaticamente ao carregar o módulo
iniciarJogo();
