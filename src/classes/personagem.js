export default class Personagem {
    constructor(nome, classe) {
        this.nome = nome; // Nome do personagem
        this.classe = classe; // Classe do personagem (Guerreiro, Mago, Arqueiro)
        this.ataque = 10; // Valor inicial de ataque
        this.defesa = 5; // Valor inicial de defesa
        this.vida = 20; // Valor inicial de vida
        this.itens = []; // Inventário inicial do personagem, agora com objetos

        // Configura os atributos e itens iniciais baseados na classe escolhida
        this.configurarClasse();
    }

    configurarClasse() {
        const configuracoesPorClasse = {
            Guerreiro: {
                ataque: 5,
                defesa: 5,
                vida: 0,
                itens: [
                    { nome: 'Espada', tipo: 'ataque', valor: 5 },
                    { nome: 'Escudo', tipo: 'defesa', valor: 5 },
                ],
            },
            Mago: {
                ataque: 0,
                defesa: 0,
                vida: 20,
                itens: [
                    { nome: 'Cajado', tipo: 'ataque', valor: 3 },
                    { nome: 'Livro Mágico', tipo: 'especial', valor: 10 },
                ],
            },
            Arqueiro: {
                ataque: 3,
                defesa: 0,
                vida: 0,
                itens: [
                    { nome: 'Arco', tipo: 'ataque', valor: 4 },
                    { nome: 'Flechas', tipo: 'ataque', valor: 2 },
                ],
            },
        };

        const configuracao = configuracoesPorClasse[this.classe];
        if (configuracao) {
            this.ataque += configuracao.ataque;
            this.defesa += configuracao.defesa;
            this.vida += configuracao.vida;
            this.itens = configuracao.itens;
        }
    }
}
