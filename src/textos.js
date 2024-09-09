export const textos = {
    narracao: {
        inicio: {
            narracaoInicio1:
                '🔊 Em uma noite silenciosa, um evento catastrófico abalou a tranquilidade de sua vila. Um fenômeno mágico inexplicável rasgou o céu, e uma onda de energia desconhecida envolveu a área, desintegrando a única ponte que ligava sua vila ao mundo exterior. Com a ponte destruída, você e seus companheiros se viram isolados, sem possibilidade de retorno.',
            narracaoInicio2:
                '🔊 Foi então que uma misteriosa mensagem apareceu em uma antiga pedra de altar no centro da vila. A mensagem brilhava com uma luz intensa e mágica. À medida que você se aproximava para ler, a luz se intensificou, envolvendo-o em um brilho ofuscante. De repente, a energia mágica foi tão poderosa que você perdeu os sentidos e desmaiou.',
            narracaoInicio3:
                '🔊 Você acordou com um salto, encontrando-se ao chão, com a visão turva. A luz da mensagem desapareceu, mas você percebe que está na entrada da Caverna do Dragão. O ambiente ao seu redor está em caos – a ponte para sua vila foi destruída e todas as rotas de fuga estão bloqueadas. Sem saída e com o futuro do reino em jogo, você não tem escolha a não ser adentrar na caverna.',
            narracaoInicioCaminhos1: '🔊 Você caminha em frente e se depara com 2 caminhos',
            narracaoInicioCaminhos2:
                '1️⃣ Seguindo para Esquerda você irá numa porta misteriosa\n2️⃣ Seguindo para Direita você irá para o Corredor escuro',
            narracaoInicioCaminhos3:
                '1️⃣ Seguindo para Esquerda você irá para o refúgio do Goblin\n2️⃣ Seguindo em Frente você irá para a Cripta do Espectro)',
            narracaoInicioCaminhosFinal:
                '🔊 Você segue em frente e entra no covil do Dragão... O ar se torna pesado, e o chão treme sob seus pés. À sua frente, o brilho intenso das chamas revela a imensa silhueta do Dragão, aguardando por sua próxima vítima.',
            narracaoFinalGame:
                '🔊 Você acaba de derrotar o Dragão, assim abre um porta com uma iluminação alta referente a luz do dia, e você acaba saindo da caverna',
            narracaoFim: '✨ Parabens você finalizou o jogo!!!!!!!!!!',
        },
    },
    acoes: {
        incio: {
            acordou: 'Você abre os olhos e se levanta',
        },
        portaMisteriosa: {
            bauFechou:
                '✨ Ao escolher o item, todo o baú se fechou e você não conseguiu mais abrir ele para pegar o restante dos itens.',
        },
        dropItens:
            '{criatura} acaba de dropar um báu que contém 3 itens e você só pode escolher 1!',
    },
    falas: {
        daisy: {
            fala1: `🌻 Olá, jovem aventureiro! Seja bem-vindo à Caverna do Dragão, um lugar repleto de mistérios e desafios. Aqui, nas profundezas das cavernas ancestrais, há segredos antigos e riquezas inimagináveis esperando por aqueles corajosos o suficiente para explorá-los.`,
            fala2: `🌻 Opa, desculpa! Qual é seu nome?`,
            fala3: `🌻 Bem-vindo, {nome}, à Caverna do Dragão..`,
            fala4: `🌻 Você está prestes a embarcar em uma jornada épica onde terá a chance de escolher seu próprio destino. Seja um habilidoso mago com poderes arcanos, um destemido guerreiro com força inigualável ou um astuto arqueiro com precisão letal – cada escolha trará suas próprias aventuras e perigos.`,
            fala5: `🌻 Seu desejo é uma ordem, darei-lhe habilidades de {classe}`,
            fala6: `🌻 Siga em frente, no fim terá a saida, porém, ela está bloqueada por um enorma dragão, derrote para alcançar a saida`,
            fala7: ``,
        },
    },
    prompt: {
        decisao: '🤔 Qual vai ser a sua decisão?',
        decisaoBatalha: '🤔 O que você irá fazer?\n\n[1] 💥 ・ Atacar\n[2] 🧤 ・ Defender',
        principal: {
            informarNome: '🔮 Informe seu nome:',
            escolhaClasse:
                '🔮 Escolha sua classe:\n\n[1] Guerreiro 🗡️\n[2] Mago 🧙‍♂️\n[3] Arqueiro🏹',
        },
        portaMisteriosa: {
            escolhaItem:
                '🤔 Qual o primeiro item que você gostaria de pegar?\n\n    [1]・Espada longa e dourada\n    [2]・Armadura linda e reluzente como as estrelas\n    [3]・Cogumelo misterioso vermelho com bolinhas brancas\n\nQual é a sua escolha?',
        },
    },
    inicio: {
        escolhaCaminho:
            'Você caiu em um buraco e ao se levantar, se deparou com a seguinte escolha: ao seu lado esquerdo, você nota uma porta grande com madeira avermelhada e com aspecto de velha, caindo aos pedaços. Do lado direito, você nota um corredor longo e escuro, sem conseguir ver o final.',
    },
    locais: {
        portaMisteriosa: {
            descricao: '🚪 Você entrou em uma sala e encontrou um baú misterioso com 3 itens.',
            opcoes: {
                1: 'Espada longa e dourada',
                2: 'Armadura linda e reluzente como as estrelas',
                3: 'Cogumelo misterioso vermelho com bolinhas brancas',
            },
            resultado: {
                1: 'Ao segurar a espada, você sente uma força de vontade percorrendo seu corpo com a sabedoria e destreza do rei antigo.',
                2: 'Ao vestir a armadura, você sente um cosmo entrando em seu corpo.',
                3: 'Ao consumir o cogumelo, você sente como se tivesse duplicado de tamanho.',
            },
            saida: '🚪 Então você decide voltar pois não tem outra entrada, e logo seguida a porta fecha e tranca. você acaba voltando',
        },
        corredorEscuro: {
            descricao:
                '🚶🏼‍♂️ Você está caminhando pelo corredor escuro e encontra um {criatura}, ele está em sua direção para atacar.',
            opcoes: {
                1: '💥 ・ Atacar',
                2: '🧤 ・ Defender',
            },
        },
        refugioDoGlobin: {
            descricao:
                '🚶🏼‍♂️ Você acaba entrando no refúgio do globin, a entrada é trancada, e um {criatura} acaba saindo de uma bancada, armado com um faca pequena de ponta afiada',
        },
        criptaDoEspectro: {
            descricao:
                '🚶🏼‍♂️ Uma sala envolta em névoa escura e fria. Sombras se movem nas paredes, e uma presença opressiva faz o ambiente parecer cada vez mais sombrio. O espectro flutua, quase invisível.',
        },
        guaridaDoTroll: {
            descricao:
                '🚶🏼‍♂️ Uma sala envolta em névoa escura e fria. Sombras se movem nas paredes, e uma presença opressiva faz o ambiente parecer cada vez mais sombrio. O troll flutua, quase invisível.',
        },
    },
};
