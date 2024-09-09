import { portaMisteriosa } from '../functions/mapas/portaMisteriosa.js';
import { corredorEscuro } from '../functions/mapas/corredorEscuro.js';
import { refugioDoGlobin } from '../functions/mapas/refugioDoGoblin.js';
import { criptaDoEspectro } from '../functions/mapas/criptaDoEspectro.js';
import { covilDoDragao } from '../functions/mapas/covilDoDragao.js';
import { guaridaDotroll } from '../functions/mapas/guaridaDoTroll.js';

export default class Locais {
    constructor() {
        this.portaMisteriosa = portaMisteriosa.bind(this);
        this.corredorEscuro = corredorEscuro.bind(this);
        this.refugioDoGlobin = refugioDoGlobin.bind(this);
        this.criptaDoEspectro = criptaDoEspectro.bind(this);
        this.covilDoDragao = covilDoDragao.bind(this);
        this.guaridaDotroll = guaridaDotroll.bind(this);
    }
}
