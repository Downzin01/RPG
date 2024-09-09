import { processarAcao } from '../batalhaCriatura.js';
import { processarItemPosBatalha } from '../itensPosBatalha.js';
import { exibirTextoGradualmente } from '../../utils/gerarTextoGradualmente.js';
import Slime from '../../classes/Criaturas/slime.js';
const slime = new Slime();

export async function corredorEscuro(personagem, textos) {
    await exibirTextoGradualmente(
        textos.locais.corredorEscuro.descricao.replace('{criatura}', slime.nome),
        50
    );

    // Loop principal do combate
    while (slime.vida > 0 && personagem.vida > 0) {
        let escolhaAtaqueEDefesa = prompt(textos.prompt.decisaoBatalha);

        // Valida a escolha do jogador
        while (escolhaAtaqueEDefesa < 1 || escolhaAtaqueEDefesa > 2) {
            escolhaAtaqueEDefesa = prompt(textos.prompt.decisaoBatalha);
        }

        // Processa a ação escolhida
        processarAcao(personagem, escolhaAtaqueEDefesa, textos, slime);

        // Verifica se o slime foi derrotado
        if (slime.vida <= 0) {
            alert(`Você derrotou ${slime.nome}!`);
            await processarItemPosBatalha(personagem, personagem.itens, slime, textos);
            return; // Retorna para evitar que o código continue executando o próximo local
        }

        // Verifica se o personagem foi derrotado
        if (personagem.vida <= 0) {
            alert('Game Over');
            while (true) {
                let escolhaCaminho = prompt('Deseja continuar novamente? [S/N]');

                if (
                    escolhaCaminho.toLowerCase() === 's' ||
                    escolhaCaminho.toLowerCase() === 'sim'
                ) {
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
            return; // Encerra o fluxo para evitar continuar o jogo
        }
    }
}
