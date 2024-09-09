import { exibirTextoGradualmente } from '../utils/gerarTextoGradualmente.js';
import Locais from '../classes/locais.js';

export async function processarItemPosBatalha(personagem, item, criatura, textos) {
    const itens = [
        { nome: 'Espada Longa', tipo: 'ataque', valor: 5 },
        { nome: 'Adaga Afiada', tipo: 'ataque', valor: 3 },
        { nome: 'Martelo de Guerra', tipo: 'ataque', valor: 7 },
        { nome: 'Lança Sagrada', tipo: 'ataque', valor: 6 },
        { nome: 'Armadura de Ferro', tipo: 'defesa', valor: 10 },
        { nome: 'Escudo de Madeira', tipo: 'defesa', valor: 5 },
        { nome: 'Elmo Antigo', tipo: 'defesa', valor: 8 },
        { nome: 'Cota de Malha', tipo: 'defesa', valor: 7 },
        { nome: 'Poção de Vida', tipo: 'vida', valor: 20 },
        { nome: 'Erva Medicinal', tipo: 'vida', valor: 15 },
        { nome: 'Fruta Mágica', tipo: 'vida', valor: 25 },
        { nome: 'Cogumelo Misterioso', tipo: 'vida', valor: 30 },
        { nome: 'Amuleto do Destino', tipo: 'especial', valor: 50 },
    ];

    // Função para verificar se o item já está na lista do personagem
    function possuiItem(personagem, itemNome) {
        return personagem.itens && personagem.itens.includes(itemNome);
    }

    // Seleciona 3 itens aleatórios para o jogador escolher, com probabilidade menor para o item especial
    const opcoes = [];

    while (opcoes.length < 3) {
        const chance = Math.random();
        let itemAleatorio;
        if (chance < 0.1) {
            // 10% de chance de gerar o item especial
            itemAleatorio = itens.find((i) => i.tipo === 'especial');
        } else {
            itemAleatorio = itens[Math.floor(Math.random() * (itens.length - 1))];
        }

        if (!opcoes.includes(itemAleatorio)) {
            opcoes.push(itemAleatorio);
        }
    }

    await exibirTextoGradualmente(textos.acoes.dropItens.replace('{criatura}', criatura.nome), 50);

    let escolhaItem = prompt(
        `🤔 Qual o item que você gostaria de pegar?\n\n${opcoes.map((opcao, index) => `[${index + 1}] ${opcao.nome} (Tipo: ${opcao.tipo})`).join('\n')}\n\nQual é a sua escolha?`
    );

    while (escolhaItem < 1 || escolhaItem > 3) {
        escolhaItem = prompt(
            `🤔 Qual o item que você gostaria de pegar?\n\n${opcoes.map((opcao, index) => `[${index + 1}] ${opcao.nome} (Tipo: ${opcao.tipo})`).join('\n')}\n\nQual é a sua escolha?`
        );
    }

    const itemEscolhido = opcoes[parseInt(escolhaItem) - 1];
    const valorIncremento = possuiItem(personagem, itemEscolhido) ? 5 : itemEscolhido.valor;

    if (itemEscolhido.tipo === 'ataque') {
        personagem.ataque += valorIncremento;

        alert(
            `✨ Você adquiriu o item: ${itemEscolhido.nome}\n💥・Ataque: ${personagem.ataque} (+${valorIncremento})\n🧤・Defesa: ${personagem.defesa}\n❤・Vida: ${personagem.vida}`
        );
    } else if (itemEscolhido.tipo === 'defesa') {
        personagem.defesa += valorIncremento;

        alert(
            `✨ Você adquiriu o item: ${itemEscolhido.nome}\n💥・Ataque: ${personagem.ataque}\n🧤・Defesa: ${personagem.defesa} (+${valorIncremento})\n❤・Vida: ${personagem.vida}`
        );
    } else if (itemEscolhido.tipo === 'vida') {
        personagem.vida += valorIncremento;

        alert(
            `✨ Você adquiriu o item: ${itemEscolhido.nome}\n💥・Ataque: ${personagem.ataque}\n🧤・Defesa: ${personagem.defesa}\n❤・Vida: ${personagem.vida} (+${valorIncremento})`
        );
    } else if (itemEscolhido.tipo === 'especial') {
        personagem.ataque += valorIncremento;
        personagem.defesa += valorIncremento;
        personagem.vida += valorIncremento;

        alert(
            `✨ Você adquiriu o item: ${itemEscolhido.nome}\n💥・Ataque: ${personagem.ataque} (+${valorIncremento})\n🧤・Defesa: ${personagem.defesa} (+${valorIncremento})\n❤・Vida: ${personagem.vida} (+${valorIncremento})`
        );
    }

    // Adiciona o item ao inventário do personagem se ele ainda não o possui
    if (!possuiItem(personagem, itemEscolhido.nome)) {
        personagem.itens = personagem.itens || [];
        personagem.itens.push(itemEscolhido);
    }
}
