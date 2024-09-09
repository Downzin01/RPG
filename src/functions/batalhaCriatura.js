export function processarAcao(personagem, acao, textos, criatura) {
    // Receba o slime como argumento
    let nomeCriatura = criatura.nome;
    let ataqueCriatura = criatura.ataque;
    let defesaCriatura = criatura.defesa;

    let danoCriatura = Math.max(0, ataqueCriatura - personagem.defesa);
    let danoJogador = Math.max(0, personagem.ataque - defesaCriatura);

    const exibirStatus = () => {
        alert(
            `🧮・Status:\n\n  👽・${nomeCriatura}:\n    💥・Ataque: ${ataqueCriatura}\n    🧤・Defesa: ${defesaCriatura}\n    ❤・Vida: ${criatura.vida}\n\n  🗿・Você [${personagem.classe}]:\n    💥・Ataque: ${personagem.ataque}\n    🧤・Defesa: ${personagem.defesa}\n    ❤・Vida: ${personagem.vida}`
        );
    };

    alert('Batalha Iniciada!');
    exibirStatus();

    if (acao === '1') {
        // Ataque do jogador
        let possibilidadeAtaqueJogador = Math.floor(Math.random() * 3) + 1;

        switch (possibilidadeAtaqueJogador) {
            case 1:
                danoJogador += 7;
                criatura.defesa = Math.max(0, criatura.defesa - 3); // Modifica diretamente no slime
                criatura.vida = Math.max(0, criatura.vida - danoJogador); // Modifica diretamente no slime
                alert(`Você acertou perfeitamente, atingindo ${danoJogador} de dano na criatura`);
                break;
            case 2:
                criatura.vida = Math.max(0, criatura.vida - danoJogador);
                criatura.defesa = Math.max(0, criatura.defesa - 1);
                alert(`Você acertou o ataque, atingindo ${danoJogador} de dano na criatura`);
                break;
            default:
                danoJogador = Math.max(0, danoJogador - 4);
                criatura.vida = Math.max(0, criatura.vida - danoJogador);
                alert(
                    `Você acertou o ataque, mas executou de mal jeito, atingindo ${danoJogador} de dano na criatura`
                );
                break;
        }
        exibirStatus();
    } else if (acao === '2') {
        // Defesa do jogador
        let possibilidadeDefesaJogador = Math.floor(Math.random() * 3) + 1;

        if (possibilidadeDefesaJogador === 1) {
            danoCriatura = danoCriatura - 5;
            danoCriatura = danoCriatura < 0 ? 0 : danoCriatura;
            personagem.defesa = personagem.defesa + 3;
            alert(
                `Você se defendeu perfeitamente, reduzindo o dano da criatura para ${danoCriatura}.`
            );
        } else if (possibilidadeDefesaJogador === 2) {
            danoCriatura = danoCriatura - 2;
            danoCriatura = danoCriatura < 0 ? 0 : danoCriatura;
            alert(`Você se defendeu, mas sofreu ${danoCriatura} de dano da criatura.`);
        } else {
            danoCriatura = danoCriatura + 3;
            personagem.defesa = personagem.defesa - 2;
            personagem.defesa = personagem.defesa < 0 ? 0 : personagem.defesa;
            alert(
                `Você falhou em se defender corretamente, aumentando o dano para ${danoCriatura}.`
            );
        }

        personagem.vida = personagem.vida - danoCriatura;
        personagem.vida = personagem.vida < 0 ? 0 : personagem.vida;
        exibirStatus();
    }

    // Ataque da criatura (caso o slime ainda esteja vivo)
    if (criatura.vida > 0) {
        let possibilidadeAtaqueCriatura = Math.floor(Math.random() * 3) + 1;

        switch (possibilidadeAtaqueCriatura) {
            case 1:
                danoCriatura += 7;
                personagem.defesa = Math.max(0, personagem.defesa - 3);
                personagem.vida = Math.max(0, personagem.vida - danoCriatura);
                alert(
                    `${nomeCriatura} acertou perfeitamente em você, atingindo ${danoCriatura} de dano`
                );
                break;
            case 2:
                personagem.vida = Math.max(0, personagem.vida - danoCriatura);
                personagem.defesa = Math.max(0, personagem.defesa - 1);
                alert(
                    `${nomeCriatura} acertou o ataque em você, atingindo ${danoCriatura} de dano`
                );
                break;
            default:
                danoCriatura = Math.max(0, danoCriatura - 4);
                personagem.vida = Math.max(0, personagem.vida - danoCriatura);
                alert(
                    `${nomeCriatura} acertou o ataque em você, mas executou de mal jeito, atingindo ${danoCriatura} de dano`
                );
                break;
        }
        exibirStatus();
    }
}
