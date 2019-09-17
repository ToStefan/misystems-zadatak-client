export class Interface implements VoziloInterface {
    id: number;
    tip: string;
    proizvodjac: string;
    model: string;
    tipKaroserije: string;
    gorivo: string;
    zapreminaMotora: string;
    snagaMotora: string;
    menjac: string;
    pogon: string;
    brojVrata: number;
    brojSedista: number;
    zapreminaPrtljaznika: number;

    constructor(v: VoziloInterface) {
        this.id = v.id;
        this.tip = v.tip;
        this.proizvodjac = v.proizvodjac;
        this.model = v.model;
        this.tipKaroserije = v.tipKaroserije;
        this.gorivo = v.gorivo;
        this.zapreminaMotora = v.zapreminaMotora;
        this.snagaMotora = v.snagaMotora;
        this.menjac = v.menjac;
        this.pogon = v.pogon;
        this.brojVrata = v.brojVrata;
        this.brojSedista = v.brojSedista;
        this.zapreminaPrtljaznika = v.zapreminaPrtljaznika;
    }
}

interface VoziloInterface {
    id: number;
    tip: string;
    proizvodjac: string;
    model: string;
    tipKaroserije: string;
    gorivo: string;
    zapreminaMotora: string;
    snagaMotora: string;
    menjac: string;
    pogon: string;
    brojVrata: number;
    brojSedista: number;
    zapreminaPrtljaznika: number;
}