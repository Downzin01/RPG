import { exibirTextoGradualmente } from '../../utils/gerarTextoGradualmente.js';
import { processarItem } from '../processarItem.js';

export async function portaMisteriosa(personagem, textos) {
    await exibirTextoGradualmente(textos.locais.portaMisteriosa.descricao, 50);

    let escolhaItem = prompt(textos.prompt.portaMisteriosa.escolhaItem);

    while (escolhaItem < 1 || escolhaItem > 3) {
        escolhaItem = prompt(textos.prompt.portaMisteriosa.escolhaItem);
    }

    await exibirTextoGradualmente(textos.acoes.portaMisteriosa.bauFechou, 50);

    await processarItem(personagem, escolhaItem, textos);
}
