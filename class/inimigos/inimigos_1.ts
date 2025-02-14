import { Util } from '../../Util';
import { InimigoBase } from '../superclass/inimigobase';

export class Inimigo1 extends InimigoBase {
    constructor() {
        super(
            'Slime', // nome
            2, // nivel
            50, // vida
            0, // mana
            100, // stamina
            5, // forca
            0, // intelecto
            0, // destreza
            3, // defesa
            Util.randomizar(100, 200), // exp
            Util.randomizar(100, 200), // gold
            new Set([
                'Capa Invisível',
                'Arco Élfico'
            ]), // itens
            20, // chanceItem
            0 // debuffVeneno
        );
    }
}

export class Inimigo2 extends InimigoBase {
    constructor() {
        super(
            'Lobo', // nome
            4, // nivel
            75, // vida
            0, // mana
            125, // stamina
            2, // forca
            0, // intelecto
            8, // destreza
            7, // defesa
            Util.randomizar(150, 250), // exp
            Util.randomizar(150, 250), // gold
            new Set([
                'Armadura Abençoada',
                'Adaga Amaldiçoada'
            ]), // itens
            20, // chanceItem
            0 // debuffVeneno
        );
    }
}

export class Inimigo3 extends InimigoBase {
    constructor() {
        super(
            'Esqueleto', // nome
            6, // nivel
            100, // vida
            0, // mana
            150, // stamina
            10, // forca
            0, // intelecto
            4, // destreza
            5, // defesa
            Util.randomizar(200, 300), // exp
            Util.randomizar(200, 300), // gold
            new Set([
                'Manto do Mestre Mago',
                'Varinha do Professor'
            ]), // itens
            20, // chanceItem
            0 // debuffVeneno
        );
    }
}