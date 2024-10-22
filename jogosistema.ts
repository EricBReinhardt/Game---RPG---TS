import { Util } from "./Util";
import { Inimigo1, Inimigo2, Inimigo3 } from './inimigos/inimigos_1';
import { heroi } from "./index"
import promptSync from "prompt-sync";

const prompt = promptSync();
let danoVar = Util.randomizar(0, 10)

let numeroEncontros: number = 0;
let chanceEncontros: number;
let numeroDescanso = 0;
let numeroTreinos = 0;

export function jogo() {

    chanceEncontros = Util.randomizar(1, 10);

    if (numeroEncontros == 0 || numeroEncontros == 4 || numeroEncontros == 8) {
        fogueira()
    }

    //BATALHA COMUM

    else if (numeroEncontros != 0 && numeroEncontros != 4 && numeroEncontros != 8) {
        batalha()
    }

}

function getInimigoAleatorio() {
    const inimigos = [Inimigo1, Inimigo2, Inimigo3];
    let chanceBatalha = Util.randomizar(0, inimigos.length);
    return new inimigos[chanceBatalha]();
}

function mostrarMenu(numeroDescanso: number, numeroTreinos: number) {
    console.log("\n========= FOGUEIRA =========");
    if (numeroTreinos < 3 && numeroDescanso == 0) {
        console.log("1 - Treinar força");
        console.log("2 - Treinar intelecto");
        console.log("3 - Treinar destreza");
        console.log("4 - Descansar");
        console.log("5 - Status");
        console.log("6 - Avançar área\n");
    } else if (numeroTreinos >= 3 && numeroDescanso == 0) {
        console.log("1 - Descansar");
        console.log("2 - Status");
        console.log("3 - Avançar área\n");
    } else if (numeroTreinos < 3 && numeroDescanso == 1) {
        console.log("1 - Treinar força");
        console.log("2 - Treinar intelecto");
        console.log("3 - Treinar destreza");
        console.log("4 - Status");
        console.log("5 - Avançar área\n");
    } else if (numeroTreinos >= 3 && numeroDescanso == 1) {
        console.log("1 - Status");
        console.log("2 - Avançar área\n");
    }
}

function fogueira() {
    let numeroHoras: number;
    numeroDescanso = 0
    numeroTreinos = 0

    while (true) {
        mostrarMenu(numeroDescanso, numeroTreinos);
        const opcao = Number(prompt("Escolha uma opção: "))

        switch (opcao) {
            case 1:
                if (numeroTreinos < 3 && numeroDescanso == 0 || numeroTreinos < 3 && numeroDescanso == 1) {
                    console.log("-".repeat(20));
                    console.log("Quanto deseja treinar...?");
                    console.log("1 - Pouco");
                    console.log("2 - Muito\n");
                    numeroHoras = Number(prompt("Escolha uma opção: "))
                    if (numeroHoras == 1) {
                        numeroTreinos = numeroTreinos + 1;
                    } else if (numeroHoras == 2) {
                        numeroTreinos = numeroTreinos + 2;
                    }
                    heroi.treinarForca(numeroHoras);
                } else if (numeroTreinos >= 3 && numeroDescanso == 0) {
                    console.log("-".repeat(20));
                    console.log("Quanto deseja descansar...?");
                    console.log("1 - Pouco");
                    console.log("2 - Muito (Tem chance de 50% de emboscada, mas restaura seus status por completo)\n");
                    numeroHoras = Number(prompt("Escolha uma opção: "))
                    numeroDescanso = numeroDescanso + 1;
                    heroi.descansar(numeroHoras);
                    if (numeroHoras == 2) {
                        let emboscada = Util.randomizar(1, 2)
                        if (emboscada = 2) {
                            batalha()
                        }
                    }
                } else if (numeroTreinos >= 3 && numeroDescanso == 1) {
                    heroi.status();
                }
                break;
            case 2:
                if (numeroTreinos < 3 && numeroDescanso == 0 || numeroTreinos < 3 && numeroDescanso == 1) {
                    console.log("-".repeat(20));
                    console.log("Quanto deseja treinar...?");
                    console.log("1 - Pouco");
                    console.log("2 - Muito\n");
                    numeroHoras = Number(prompt("Escolha uma opção: "))
                    if (numeroHoras == 1) {
                        numeroTreinos = numeroTreinos + 1;
                    } else if (numeroHoras == 2) {
                        numeroTreinos = numeroTreinos + 2;
                    }
                    heroi.treinarIntelecto(numeroHoras);
                } else if (numeroTreinos >= 3 && numeroDescanso == 0) {
                    heroi.status();
                } else if (numeroTreinos >= 3 && numeroDescanso == 1) {
                    console.log("-".repeat(20));
                    console.log("Você avança para próxima área...");
                    numeroEncontros = numeroEncontros + 1;
                    chanceEncontros = Util.randomizar(1, 10);
                    jogo()
                }
                break;

            case 3:
                if (numeroTreinos < 3 && numeroDescanso == 0 || numeroTreinos < 3 && numeroDescanso == 1) {
                    console.log("-".repeat(20));
                    console.log("Quanto deseja treinar...?");
                    console.log("1 - Pouco");
                    console.log("2 - Muito\n");
                    numeroHoras = Number(prompt("Escolha uma opção: "))
                    if (numeroHoras == 1) {
                        numeroTreinos = numeroTreinos + 1;
                    } else if (numeroHoras == 2) {
                        numeroTreinos = numeroTreinos + 2;
                    }
                    heroi.treinarDestreza(numeroHoras);
                } else if (numeroTreinos >= 3 && numeroDescanso == 0) {
                    console.log("-".repeat(20));
                    console.log("Você avança para próxima área...");
                    numeroEncontros = numeroEncontros + 1;
                    chanceEncontros = Util.randomizar(1, 10);
                    jogo();
                }
                break;
            case 4:
                if (numeroTreinos < 3 && numeroDescanso == 0) {
                    console.log("-".repeat(20));
                    console.log("Quanto deseja descansar...?");
                    console.log("1 - Pouco");
                    console.log("2 - Muito (Tem chance de 50% de emboscada, mas restaura seus status por completo)\n");
                    numeroHoras = Number(prompt("Escolha uma opção: "))
                    numeroDescanso = numeroDescanso + 1;
                    heroi.descansar(numeroHoras);
                    if (numeroHoras == 2) {
                        let emboscada = Util.randomizar(1, 2)
                        if (emboscada = 2) {
                            batalha()
                        }
                    }
                }
                else if (numeroTreinos < 3 && numeroDescanso == 1) {
                    heroi.status();
                }
                break;
            case 5:
                if (numeroTreinos <= 3 && numeroDescanso == 0) {
                    heroi.status();
                }
                else if (numeroDescanso == 1 && numeroTreinos <= 3) {
                    console.log("-".repeat(20));
                    console.log("Você avança para próxima área...");
                    numeroEncontros = numeroEncontros + 1;
                    chanceEncontros = Util.randomizar(1, 10);
                    break;
                }
                break;
            case 6:
                console.log("-".repeat(20));
                console.log("Você avança para próxima área...");
                numeroEncontros = numeroEncontros + 1;
                chanceEncontros = Util.randomizar(1, 10);
                jogo()
            default:
                break;
        }
    }
}

function batalha() {
    let inimigo = getInimigoAleatorio();
    console.log(`\nVocê se depara com um(a)... ${inimigo.nome}`);

    while (true) {

        if (inimigo.vida <= 0) {
            console.log(`Você derrotou a/o ${inimigo.nome}`);
            console.log(`Você ganhou ${inimigo.exp} de expêriencia e ${inimigo.gold} de gold.`);
            heroi.exp = heroi.exp + inimigo.exp
            heroi.gold = heroi.gold + inimigo.gold
            let chanceDrop = inimigo.chanceItem
            let sorte = Util.randomizar(1, 100);
            if (sorte <= chanceDrop) {
                const itensArray = Array.from(inimigo.itens);
                const itemAleatorio = Util.randomizar(0, itensArray.length);
                const item = itensArray[itemAleatorio];
                heroi.inventario.add(item);
                console.log(`O inimigo dropou um/uma ${item}! Você botou em seu inventário...`);
            }
            inimigo.debuffVeneno = 0
            numeroEncontros = numeroEncontros + 1
            heroi.upar()
            jogo()
        }

        console.log("\n========= COMBATE =========");
        console.log("\n1 - Atacar");
        console.log("2 - Habilidades");
        console.log("3 - Itens\n");

        const opcao = Number(prompt("Escolha uma opção: "))

        switch (opcao) {
            case 1:
                if (heroi.destreza >= inimigo.destreza && inimigo.vida > 0) {
                    atacar(inimigo)
                    inimigoTurno(inimigo)
                } else if (heroi.destreza < inimigo.destreza && inimigo.vida > 0) {
                    inimigoTurno(inimigo)
                    atacar(inimigo)
                }
                break;
            case 2:
                if (inimigo.vida > 0) {
                    habilidades(inimigo)
                }
                break;
            case 3:
                break;
            default:
                break;
        }
    }
}

function inimigoTurno(adversario: Inimigo1): void {
    let inimigoDano = Math.abs(adversario.forca + adversario.destreza + (adversario.intelecto * 0.50) + danoVar - heroi.defesa)
    console.log("-".repeat(20));
    if (adversario.vida <= 0) {
        return;
    }
    if (adversario.debuffVeneno >= 1) {
        console.log(`O/A inimigo(a) está envenenado(a) e recebe ${15 + (heroi.destreza + heroi.forca)} de dano`);
        adversario.vida = adversario.vida - (15 + (heroi.destreza + heroi.forca))
        adversario.debuffVeneno = adversario.debuffVeneno - 1
    }
    if (adversario.vida <= 0) {
        return;
    }
    console.log(`O/A ${adversario.nome} te ataca e causa ${inimigoDano} de dano`);
    console.log(`O/A ${adversario.nome} perde ${danoVar + 10} de Stamina`);
    adversario.stamina = adversario.stamina - (danoVar + 10)
    heroi.vida = heroi.vida - inimigoDano
    console.log(`Sua vida atual é ${heroi.vida}/${heroi.maxVida}`);
    if (heroi.vida <= 0) {
        throw console.error("Você morreu");
    }
}

function atacar(adversario: Inimigo1): void {
    let dano = Math.abs(heroi.forca + heroi.destreza + (heroi.intelecto * 0.50) + danoVar - adversario.defesa)
    console.log("-".repeat(20));
    if (heroi.stamina <= 0) {
        console.log("Sua stamina esgotou...");
        let sorteStamina = Util.randomizar(1, 3)
        if (sorteStamina < 3) {
            console.log("Mas você consegue atacar e recuperar parte de sua stamina!");
            heroi.stamina = 25
        } else {
            console.log("Você está cansado demais para atacar...");
        }
    } if (heroi.stamina > 0) {
        if (heroi.buffGritoDeGuerra != 0) {
            console.log(`Você ataca a/o ${adversario.nome} impulsionado pelo Grito de Guerra!`);
            adversario.vida = adversario.vida - (dano * 2)
            console.log(`Você causa ${dano * 2} de dano físico na/no ${adversario.nome}`);
            if (heroi.buffGritoDeGuerra > 0) {
                console.log(`Duração buff Grito de Guerra: ${heroi.buffGritoDeGuerra - 1} turno(s)`);

            } else {
                console.log(`Buff acabou`);
            } if (heroi.buffImbuirVeneno == 1) {
                console.log(`${adversario.nome} está envenenado por 3 turnos!`);
                heroi.buffImbuirVeneno = 0
                adversario.debuffVeneno = 3
            }
            console.log(`Você perde ${danoVar + 10} de Stamina`);
            heroi.stamina = heroi.stamina - (danoVar + 10)
            console.log(`Sua Stamina atual é ${heroi.stamina}/${heroi.maxStamina}`);
            heroi.buffGritoDeGuerra = heroi.buffGritoDeGuerra - 1
        } else {
            console.log(`Você ataca a/o ${adversario.nome}`);
            adversario.vida = adversario.vida - dano
            console.log(`Você causa ${dano} de dano físico na/no ${adversario.nome}`);
            if (heroi.buffImbuirVeneno == 1) {
                console.log(`${adversario.nome} está envenenado por 3 turnos!`);
                heroi.buffImbuirVeneno = 0
                adversario.debuffVeneno = 3
            }
            console.log(`Você perde ${danoVar + 10} de Stamina`);
            heroi.stamina = heroi.stamina - (danoVar + 10)
            console.log(`Sua Stamina atual é ${heroi.stamina}/${heroi.maxStamina}`);
        }
    }
}

type Habilidade = (adversario: Inimigo1) => void;

const habilidadesMap: { [key: string]: Habilidade } = {
    "Grito de Guerra": gritoDeGuerra.bind(heroi),
    "Trovão": trovao.bind(heroi),
    "Meteoro": meteoro.bind(heroi),
    "Roubar": roubar.bind(heroi),
    "Cura Sagrada": curaSagrada.bind(heroi),
    "Imbuir Veneno": imbuirVeneno.bind(heroi)
}

function habilidades(adversario: Inimigo1): void {
    let spellsArray = Array.from(heroi.spells);
    if (spellsArray.length > 0) {
        console.log("\n========= HABILIDADES =========");
        console.log("");
        spellsArray.forEach((spell, index) => { console.log(`${index + 1} - ${spell}`) });
        const opcao = Number(prompt("\nEscolha uma opção: "))
        if (opcao > 0 && opcao <= spellsArray.length) {
            const habilidadeEscolhida = spellsArray[opcao - 1];
            if (habilidadesMap.hasOwnProperty(habilidadeEscolhida)) {
                const acao = habilidadesMap[habilidadeEscolhida];
                acao(adversario);
            } else {
                console.log("Opção inválida.");
            }
        } else {
            console.log("Você não tem habilidades");
        }
    }
}

function gritoDeGuerra(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.stamina < 80) {
        console.log("Stamina insuficiente para usar Grito de Guerra.");
        return;
    }
    console.log("Você usou Grito de Guerra!");
    console.log("Agora você causa dano X 2 por 2 turnos\n");
    heroi.buffGritoDeGuerra = 2;
    heroi.stamina = heroi.stamina - 80;
    console.log(`Você perdeu 80 de stamina`);
    console.log(`Sua Stamina atual é ${heroi.stamina}/${heroi.maxStamina}`);
    inimigoTurno(adversario)
}

function trovao(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.mana < 100) {
        console.log("Mana insuficiente para usar Trovão.");
        return;
    }
    console.log("Você usou Trovão!");
    console.log(`Causa ${30 + (heroi.intelecto * 0.50)} de dano mágico`);
    adversario.vida = adversario.vida - (30 + (heroi.intelecto * 0.50));
    heroi.mana = heroi.mana - 100;
    console.log(`Você perdeu 100 de mana`);
    console.log(`Sua mana atual é ${heroi.mana}/${heroi.maxMana}`);
    inimigoTurno(adversario)
}

function meteoro(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.mana < 250) {
        console.log("Mana insuficiente para usar Meteoro.");
        return;
    }
    console.log("Você usou Meteoro!");
    console.log(`Causa ${100 + heroi.intelecto} de dano mágico`);
    adversario.vida = adversario.vida - (100 + heroi.intelecto);
    heroi.mana = heroi.mana - 250;
    console.log(`Você perdeu 250 de mana`);
    console.log(`Sua mana atual é ${heroi.mana}/${heroi.maxMana}`);
    inimigoTurno(adversario)
}

function roubar(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.stamina < 50) {
        console.log("Stamina insuficiente para usar Roubar.");
        return;
    }
    console.log("Você usou Roubar!");
    heroi.gold = heroi.gold + (adversario.gold * 0.50);
    console.log(`Você roubou ${adversario.gold * 0.50} de gold`);
    let sorte = Util.randomizar(1, 2);
    if (sorte = 1) {
        const itensArray = Array.from(adversario.itens);
        const itemAleatorio = Util.randomizar(0, itensArray.length);
        const item = itensArray[itemAleatorio];
        heroi.inventario.add(item);
        console.log(`Você roubou um/uma ${item}! Você botou em seu inventário...`);
    }
    heroi.stamina = heroi.stamina - 50;
    console.log(`Você perdeu 50 de stamina`);
    console.log(`Sua stamina atual é ${heroi.stamina}/${heroi.maxStamina}`);
    inimigoTurno(adversario)
}

function curaSagrada(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.mana < 80) {
        console.log("Mana insuficiente para usar Cura Sagrada.");
        return;
    } else if (heroi.vida == heroi.maxVida) {
        console.log("Sua vida já está cheia.");
        return;
    }
    console.log("Você usou Cura Sagrada!");
    console.log(`Você cura ${50 + (heroi.intelecto * 0.50) + (heroi.forca * 0.50)} de vida`);
    heroi.vida = heroi.vida + (50 + (heroi.intelecto * 0.50) + (heroi.forca * 0.50));
    heroi.mana = heroi.mana - 80;
    console.log(`Você perdeu 80 de mana`);
    console.log(`Sua mana atual é ${heroi.mana}/${heroi.maxMana}`);
    inimigoTurno(adversario)
}

function imbuirVeneno(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.stamina < 100) {
        console.log("Stamina insuficiente para usar Imbuir Veneno.");
        return;
    }
    console.log("Você usou Imbuir Veneno!");
    console.log(`Seu próximo ataque aplicará veneno ao inimigo por 3 turnos`);
    heroi.buffImbuirVeneno = 1;
    heroi.stamina = heroi.stamina - 100;
    console.log(`Você perdeu 100 de stamina`);
    console.log(`Sua stamina atual é ${heroi.stamina}/${heroi.maxStamina}`);
    inimigoTurno(adversario)
}
