import { Personagem } from "./personagem";
import { jogo } from "./jogosistema"
import prompt from 'prompt-sync';

const teclado = prompt()
const nome = teclado("Digite o nome do herói: ");

let raca: string = "Desconhecido";
let classe: string = "Desconhecido";
let nivel: number = 0;
let arma: string = "Nenhuma";
let armadura: string = "Nenhuma";
let vida: number = 0;
let mana: number = 0;
let stamina: number = 0;
let forca: number = 0;
let intelecto: number = 0;
let destreza: number = 0;
let defesa: number = 0;

while (true) {
    console.log("\n========= RAÇAS =========");
    console.log("\n1 - Humano");
    console.log("2 - Elfo");
    console.log("3 - Anão");
    console.log("4 - Goblin");
    console.log("5 - Morto-Vivo\n");
    const opcao: number = +teclado("Escolha uma raça: ");

    if (opcao == 1) {
        raca = "Humano";
        vida = 125;
        mana = 125;
        stamina = 125;
        forca = 2;
        intelecto = 2;
        destreza = 2;
        break;
    } else if (opcao == 2) {
        raca = "Elfo";
        vida = 100;
        mana = 150;
        stamina = 125;
        forca = 0;
        intelecto = 4;
        destreza = 2;
        break;
    } else if (opcao == 3) {
        raca = "Anão";
        vida = 150;
        mana = 100;
        stamina = 125;
        forca = 4;
        intelecto = 0;
        destreza = 2;
        break;
    } else if (opcao == 4) {
        raca = "Goblin";
        vida = 100;
        mana = 100;
        stamina = 175;
        forca = 0;
        intelecto = 0;
        destreza = 6;
        break;
    } else if (opcao == 5) {
        raca = "Morto-Vivo";
        vida = 100;
        mana = 100;
        stamina = 100;
        forca = 0;
        intelecto = 0;
        destreza = 0;
        break;
    } else {
        console.log("Opção invalida");
        break;
    }
}

while (true) {
    console.log("\n========= CLASSES =========");
    console.log("\n1 - Guerreiro");
    console.log("2 - Arqueiro");
    console.log("3 - Paladino");
    console.log("4 - Ladrão");
    console.log("5 - Mago\n");
    const opcao: number = +teclado("Escolha uma classe: ")

    if (opcao == 1) {
        classe = "Guerreiro";
        arma = "Espada de madeira";
        armadura = "Armadura de cota de malha enferrujada";
        vida = vida + 50;
        mana = mana + 0;
        stamina = stamina + 50;
        forca = forca + 5;
        intelecto = intelecto + 0;
        destreza = destreza + 5;
        defesa = 5;
        break;
    } else if (opcao == 2) {
        classe = "Arqueiro";
        arma = "Arco velho";
        armadura = "Armadura de couro";
        vida = vida + 0;
        mana = mana + 0;
        stamina = stamina + 100;
        forca = forca + 2;
        intelecto = intelecto + 0;
        destreza = destreza + 8;
        defesa = 1;
        break;
    } else if (opcao == 3) {
        classe = "Paladino";
        arma = "Clava antiga";
        armadura = "Armadura de ferro enferrujada";
        vida = vida + 75;
        mana = mana + 25;
        stamina = stamina + 0;
        forca = forca + 6;
        intelecto = intelecto + 4;
        destreza = destreza + 0;
        defesa = 7;
        break;
    } else if (opcao == 4) {
        classe = "Ladrão";
        arma = "Adaga enferrujada";
        armadura = "Capa do trombadinha";
        vida = vida + 25;
        mana = vida + 0;
        stamina = stamina + 75;
        forca = forca + 4;
        intelecto = intelecto + 0;
        destreza = destreza + 6;
        defesa = 3;
        break;
    } else if (opcao == 5) {
        classe = "Mago";
        arma = "Cajado de vinhas";
        armadura = "Túnica de aprendiz";
        vida = vida + 0;
        mana = vida + 100;
        stamina = stamina + 0;
        forca = forca + 0;
        intelecto = intelecto + 10;
        destreza = destreza + 0;
        defesa = 1;
        break;
    } else {
        console.log("Opção inválida, tente novamente.");
    }
}


nivel = 1

export const heroi: Personagem = new Personagem(nome, raca, classe,nivel, vida, mana, stamina, forca, intelecto, destreza, defesa, arma, armadura);

console.log(`\nSeu nome é ${nome}, você é um ${raca} ${classe} e está no primeiro andar da dungeon de Kalindor e seu objetivo é 
chegar no último andar, você trouxe seu/sua ${arma} e está usando sua ${armadura} ... Boa sorte.\n`);

heroi.upar()

while (true) {
    jogo()
}