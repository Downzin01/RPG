import { processarItemPosBatalha } from '../itensPosBatalha.js';
import { processarAcao } from '../batalhaCriatura.js';
import Dragao from '../../classes/Criaturas/dragao.js';
import { exibirTextoGradualmente } from '../../utils/gerarTextoGradualmente.js';
const dragao = new Dragao();

export async function covilDoDragao(personagem, textos) {
    while (dragao.vida > 0 && personagem.vida > 0) {
        let escolhaAtaqueEDefesa = prompt(textos.prompt.decisaoBatalha);

        // Verifica se a escolha é válida (1 ou 2). Se não for, solicita uma nova escolha
        while (escolhaAtaqueEDefesa < 1 || escolhaAtaqueEDefesa > 2) {
            escolhaAtaqueEDefesa = prompt(textos.prompt.decisaoBatalha);
        }

        // Processa a ação escolhida pelo jogador
        processarAcao(personagem, escolhaAtaqueEDefesa, textos, dragao);

        // Verifica se o jogador ou criatura foi derrotado
        if (dragao.vida <= 0) {
            alert(`Você derrotou ${dragao.nome}!`);

            break;
        } else if (personagem.vida <= 0) {
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
            break;
        }
    }
}
