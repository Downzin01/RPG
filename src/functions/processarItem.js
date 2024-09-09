import { exibirTextoGradualmente } from '../utils/gerarTextoGradualmente.js';
import { corredorEscuro } from './mapas/corredorEscuro.js';

export async function processarItem(personagem, itemIndex, textos) {
    const itensDisponiveis = [
        { nome: 'Espada Longa', tipo: 'ataque', valor: 5 },
        { nome: 'Armadura', tipo: 'defesa', valor: 10 },
        { nome: 'Cogumelo Misterioso', tipo: 'vida', valor: 20 },
    ];

    const itemSelecionado = itensDisponiveis[parseInt(itemIndex) - 1];

    if (itemSelecionado) {
        const { nome, tipo, valor } = itemSelecionado;
        let mensagem = `✨ Você sente sua força aumentando:\n\n`;

        switch (tipo) {
            case 'ataque':
                personagem.ataque += valor;
                mensagem += `    💥 ・ Ataque: ${personagem.ataque} (+${valor})\n    🧤 ・ Defesa: ${personagem.defesa}\n    ❤ ・ Vida: ${personagem.vida}`;
                break;
            case 'defesa':
                personagem.defesa += valor;
                mensagem += `    💥 ・ Ataque: ${personagem.ataque}\n    🧤 ・ Defesa: ${personagem.defesa} (+${valor})\n    ❤ ・ Vida: ${personagem.vida}`;
                break;
            case 'vida':
                personagem.vida += valor;
                mensagem += `    💥 ・ Ataque: ${personagem.ataque}\n    🧤 ・ Defesa: ${personagem.defesa}\n    ❤ ・ Vida: ${personagem.vida} (+${valor})`;
                break;
        }

        // Verifica se o personagem já possui o item
        const itemExistente = personagem.itens.find((i) => i.nome === nome);
        if (itemExistente) {
            // Incrementa o atributo correspondente em apenas 5 pontos se já possuir o item
            if (tipo === 'ataque') {
                personagem.ataque += 5;
            } else if (tipo === 'defesa') {
                personagem.defesa += 5;
            } else if (tipo === 'vida') {
                personagem.vida += 5;
            }
            mensagem = `✨ Você já possui ${nome}. O item foi reforçado!\n\n`;
        } else {
            personagem.itens.push(itemSelecionado); // Adiciona o novo item ao inventário
        }

        alert(textos.locais.portaMisteriosa.resultado[itemIndex]);
        alert(mensagem);
    }

    await exibirTextoGradualmente(textos.locais.portaMisteriosa.saida, 50);

    await corredorEscuro(personagem, textos);
}
