import { processarItemPosBatalha } from '../itensPosBatalha.js';
import { guaridaDotroll } from './guaridaDoTroll.js';
import { processarAcao } from '../batalhaCriatura.js';
import Espectro from '../../classes/Criaturas/espectro.js';
import { exibirTextoGradualmente } from '../../utils/gerarTextoGradualmente.js';
const espectro = new Espectro();

export async function criptaDoEspectro(personagem, textos) {
    await exibirTextoGradualmente(textos.locais.criptaDoEspectro.descricao, 50);

    while (espectro.vida > 0 && personagem.vida > 0) {
        let escolhaAtaqueEDefesa = prompt(textos.prompt.decisaoBatalha);

        // Verifica se a escolha é válida (1 ou 2). Se não for, solicita uma nova escolha
        while (escolhaAtaqueEDefesa < 1 || escolhaAtaqueEDefesa > 2) {
            escolhaAtaqueEDefesa = prompt(textos.prompt.decisaoBatalha);
        }

        // Processa a ação escolhida pelo jogador
        processarAcao(personagem, escolhaAtaqueEDefesa, textos, espectro);

        // Verifica se o jogador ou criatura foi derrotado
        if (espectro.vida <= 0) {
            alert(`Você derrotou ${espectro.nome}!`);
            await processarItemPosBatalha(personagem, personagem.itens, espectro, textos);

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
