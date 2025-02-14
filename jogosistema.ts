import { Util } from "./Util";
import { Inimigo1, Inimigo2, Inimigo3 } from './class/inimigos/inimigos_1';
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

    if (numeroEncontros == 0 || numeroEncontros == 4 || numeroEncontros == 9) {
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

function mostrarMenu(numeroDescanso: number, numeroTreinos: number): void {
    console.log("\n========= FOGUEIRA =========");
    if (numeroTreinos < 3 && numeroDescanso == 0) {
        console.log("1 - Treinar força");
        console.log("2 - Treinar intelecto");
        console.log("3 - Treinar destreza");
        console.log("4 - Descansar");
        console.log("5 - Inventário");
        console.log("6 - Status");
        console.log("7 - Avançar área\n");
    } else if (numeroTreinos >= 3 && numeroDescanso == 0) {
        console.log("1 - Descansar");
        console.log("2 - Inventário");
        console.log("3 - Status");
        console.log("4 - Avançar área\n");
    } else if (numeroTreinos < 3 && numeroDescanso == 1) {
        console.log("1 - Treinar força");
        console.log("2 - Treinar intelecto");
        console.log("3 - Treinar destreza");
        console.log("4 - Inventário");
        console.log("5 - Status");
        console.log("6 - Avançar área\n");
    } else if (numeroTreinos >= 3 && numeroDescanso == 1) {
        console.log("1 - Inventário");
        console.log("2 - Status");
        console.log("3 - Avançar área\n");
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
                        if (emboscada == 2) {
                            batalha()
                        }
                    }
                } else if (numeroTreinos >= 3 && numeroDescanso == 1) {
                    heroi.mostrarInventario();
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
                    heroi.mostrarInventario();
                } else if (numeroTreinos >= 3 && numeroDescanso == 1) {
                    heroi.mostrarStatusRelevante("todos");
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
                    heroi.mostrarStatusRelevante("todos");
                } else if (numeroTreinos >= 3 && numeroDescanso == 1) {
                    console.log("-".repeat(20));
                    console.log("Você avança para próxima área...");
                    numeroEncontros = numeroEncontros + 1;
                    chanceEncontros = Util.randomizar(1, 10);
                jogo()
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
                        if (emboscada == 2) {
                            batalha()
                        }
                    }
                } else if (numeroTreinos < 3 && numeroDescanso == 1) {
                    heroi.mostrarInventario();
                } else if (numeroTreinos >= 3 && numeroDescanso == 0) {
                    console.log("-".repeat(20));
                    console.log("Você avança para próxima área...");
                    numeroEncontros = numeroEncontros + 1;
                    chanceEncontros = Util.randomizar(1, 10);
                    jogo()
                }
                break;
            case 5:
                if (numeroTreinos <= 3 && numeroDescanso == 0) {
                    heroi.mostrarInventario();
                }
                else if (numeroDescanso == 1 && numeroTreinos <= 3) {
                    heroi.mostrarStatusRelevante("todos");
                }
                break;
            case 6:
                if (numeroTreinos < 3 && numeroDescanso == 0) {
                    heroi.mostrarStatusRelevante("todos");
                }
                else if (numeroTreinos < 3 && numeroDescanso == 1){
                console.log("-".repeat(20));
                console.log("Você avança para próxima área...");
                numeroEncontros = numeroEncontros + 1;
                chanceEncontros = Util.randomizar(1, 10);
                jogo()
                }
                break;
            case 7:
                if (numeroTreinos < 3 && numeroDescanso == 0){
                console.log("-".repeat(20));
                console.log("Você avança para próxima área...");
                numeroEncontros = numeroEncontros + 1;
                chanceEncontros = Util.randomizar(1, 10);
                jogo()
                }
                break;
            default:
                break;
        }
    }
}

function batalha() {
    let inimigo = getInimigoAleatorio();
    console.log(`\nVocê se depara com um(a)... ${inimigo.getNome()}`);

    while (true) {
        if (inimigo.getVida() <= 0) {
            console.log(`Você derrotou a/o ${inimigo.getNome()}`);
            console.log(`Você ganhou ${inimigo.getExp()} de experiência e ${inimigo.getGold()} de gold.`);
            heroi.setExp(inimigo.getExp());
            heroi.setGold(inimigo.getGold());
            let chanceDrop = inimigo.getChanceItem();
            let sorte = Util.randomizar(1, 100);
            if (sorte <= chanceDrop) {
                const itensArray = Array.from(inimigo.getItens());
                const itemAleatorio = Util.randomizar(0, itensArray.length - 1);
                const item = itensArray[itemAleatorio];
                heroi.getInventario().add(item as string);
                console.log(`O inimigo dropou um/uma ${item}! Você botou em seu inventário...`);
            }
            inimigo.setDebuffVeneno(0);
            numeroEncontros += 1;
            heroi.upar();
            jogo();
            return;
        }

        console.log("\n========= COMBATE =========");
        console.log("\n1 - Atacar");
        console.log("2 - Habilidades");
        console.log("3 - Itens\n");

        const opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                if (heroi.getDestreza() >= inimigo.getDestreza()) {
                    atacar(inimigo);
                    if (inimigo.getVida() > 0) {
                        inimigoTurno(inimigo);
                    }
                } else {
                    inimigoTurno(inimigo);
                    if (inimigo.getVida() > 0) {
                        atacar(inimigo);
                    }
                }
                break;
            case 2:
                habilidades(inimigo);
                break;
            case 3:
                // Lógica para usar itens
                break;
            default:
                console.log("Opção inválida.");
                break;
        }

        if (heroi.getVida() <= 0) {
            console.log("Você morreu...");
            return;
        }
    }
}

function inimigoTurno(adversario: Inimigo1): void {
    let inimigoDano = Math.abs(adversario.getForca() + adversario.getDestreza() + (adversario.getIntelecto() * 0.50) + danoVar - heroi.getDefesa())
    console.log("-".repeat(20));
    if (adversario.getVida() <= 0) {
        return;
    }
    if (adversario.getDebuffVeneno() >= 1) {
        console.log(`O/A inimigo(a) está envenenado(a) e recebe ${15 + (heroi.getDestreza() + heroi.getForca())} de dano`);
        adversario.setVida(adversario.getVida() - (15 + (heroi.getDestreza() + heroi.getForca())));
        adversario.setDebuffVeneno(adversario.getDebuffVeneno() - 1);
    }
    if (adversario.getVida() <= 0) {
        return;
    }
    console.log(`O/A ${adversario.getNome()} te ataca e causa ${inimigoDano} de dano`);
    console.log(`O/A ${adversario.getNome()} perde ${danoVar + 10} de Stamina`);
    adversario.setStamina(adversario.getStamina() - (danoVar + 10));
    heroi.setVida(heroi.getVida() - inimigoDano);
    heroi.mostrarStatusRelevante("vida");
    if (heroi.getVida() <= 0) {
        throw console.error("Você morreu");
    }
}

function atacar(adversario: Inimigo1): void {
    let dano = Math.abs(heroi.getForca() + heroi.getDestreza() + (heroi.getIntelecto() * 0.50) + danoVar - adversario.getDefesa())
    let heroiAtacou = false;
    console.log("-".repeat(20));
    if (heroi.getStamina() <= 0) {
        console.log("Sua stamina esgotou...");
        let sorteStamina = Util.randomizar(1, 3)
        if (sorteStamina < 3) {
            console.log("Mas você consegue atacar e recuperar parte de sua stamina!");
            heroi.setStamina(heroi.getStamina() + 25);
        } else {
            console.log("Você está cansado demais para atacar...");
        }
    } if (heroi.getStamina() > 0) {
        if (heroi.getBuffGritoDeGuerra() != 0) {
            console.log(`Você ataca a/o ${adversario.getNome()} impulsionado pelo Grito de Guerra!`);
            adversario.setVida(adversario.getVida() - (dano * 2))
            console.log(`Você causa ${dano * 2} de dano físico na/no ${adversario.getNome()}`);
            if (heroi.getBuffGritoDeGuerra() > 0) {
                console.log(`Duração buff Grito de Guerra: ${heroi.getBuffGritoDeGuerra() - 1} turno(s)`);

            } else {
                console.log(`Buff acabou`);
            } if (heroi.getBuffImbuirVeneno() == 1) {
                console.log(`${adversario.getNome()} está envenenado por 3 turnos!`);
                heroi.setBuffImbuirVeneno(0)
                adversario.setDebuffVeneno(3)
            }
            heroi.setBuffGritoDeGuerra(heroi.getBuffGritoDeGuerra() - 1);
            heroiAtacou = true;
        } else {
            console.log(`Você ataca a/o ${adversario.getNome()}`);
            adversario.setVida(adversario.getVida() - dano)
            console.log(`Você causa ${dano} de dano físico na/no ${adversario.getNome()}`);
            if (heroi.getBuffImbuirVeneno() == 1) {
                console.log(`${adversario.getNome()} está envenenado por 3 turnos!`);
                heroi.setBuffImbuirVeneno(0);
                adversario.setDebuffVeneno(3);
            }
            heroiAtacou = true;
        }
        if (heroiAtacou) {
            console.log(`Você perde ${danoVar + 10} de Stamina`);
            heroi.setStamina(heroi.getStamina() - (danoVar + 10))
            if (heroi.getStamina() < 0) {
                heroi.setStamina(0);
            }
            heroi.mostrarStatusRelevante("stamina");
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
    let spellsArray = Array.from(heroi.getSpells());
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
    if (heroi.getStamina() < 80) {
        console.log("Stamina insuficiente para usar Grito de Guerra.");
        return;
    }
    console.log("Você usou Grito de Guerra!");
    console.log("Agora você causa dano X2 por 2 turnos\n");
    heroi.setBuffGritoDeGuerra(2);
    heroi.setStamina(heroi.getStamina() - 80);
    console.log(`Você perdeu 80 de stamina`);
    heroi.mostrarStatusRelevante("stamina");
    inimigoTurno(adversario)
}

function trovao(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.getMana() < 100) {
        console.log("Mana insuficiente para usar Trovão.");
        return;
    }
    console.log("Você usou Trovão!");
    console.log(`Causa ${30 + (heroi.getIntelecto() * 0.50)} de dano mágico`);
    adversario.setVida(adversario.getVida() - (30 + (heroi.getIntelecto() * 0.50)));
    heroi.setMana(heroi.getMana() - 100);
    console.log(`Você perdeu 100 de mana`);
    heroi.mostrarStatusRelevante("mana");
    inimigoTurno(adversario)
}

function meteoro(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.getMana() < 250) {
        console.log("Mana insuficiente para usar Meteoro.");
        return;
    }
    console.log("Você usou Meteoro!");
    console.log(`Causa ${100 + heroi.getIntelecto()} de dano mágico`);
    adversario.setVida(adversario.getVida() - (100 + heroi.getIntelecto()));
    heroi.setMana(heroi.getMana() - 250);
    console.log(`Você perdeu 250 de mana`);
    heroi.mostrarStatusRelevante("mana");
    inimigoTurno(adversario)
}

function roubar(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.getStamina() < 50) {
        console.log("Stamina insuficiente para usar Roubar.");
        return;
    }
    console.log("Você usou Roubar!");
    heroi.setGold(heroi.getGold() + (adversario.getGold() * 0.50));
    console.log(`Você roubou ${adversario.getGold() * 0.50} de gold`);
    let sorte = Util.randomizar(1, 3);
    if (sorte === 1) {
        const itensArray = Array.from(adversario.getItens());
        const itemAleatorio = Util.randomizar(0, itensArray.length);
        const item = itensArray[itemAleatorio];
        heroi.getInventario().add(item as string);
        console.log(`Você roubou um/uma ${item}! Você botou em seu inventário...`);
    }
    heroi.setStamina(heroi.getStamina() - 50);
    console.log(`Você perdeu 50 de stamina`);
    heroi.mostrarStatusRelevante("stamina");
    inimigoTurno(adversario)
}

function curaSagrada(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.getMana() < 80) {
        console.log("Mana insuficiente para usar Cura Sagrada.");
        return;
    } else if (heroi.getVida() == heroi.getMaxVida()) {
        console.log("Sua vida já está cheia.");
        return;
    }
    let cura = 50 + (heroi.getIntelecto() * 0.50) + (heroi.getForca() * 0.50);
    console.log("Você usou Cura Sagrada!");
    console.log(`Você cura ${cura} de vida`);
    heroi.setVida(heroi.getVida() + (cura));
    heroi.setMana(heroi.getMana() - 80);
    console.log(`Você perdeu 80 de mana`);
    heroi.mostrarStatusRelevante("mana");
    inimigoTurno(adversario)
}

function imbuirVeneno(adversario: Inimigo1): void {
    console.log("-".repeat(20));
    if (heroi.getStamina() < 100) {
        console.log("Stamina insuficiente para usar Imbuir Veneno.");
        return;
    }
    console.log("Você usou Imbuir Veneno!");
    console.log(`Seu próximo ataque aplicará veneno ao inimigo por 3 turnos`);
    heroi.setBuffImbuirVeneno(1);
    heroi.setStamina(heroi.getStamina() - 100);
    console.log(`Você perdeu 100 de stamina`);
    heroi.mostrarStatusRelevante("stamina");
    inimigoTurno(adversario)
}
