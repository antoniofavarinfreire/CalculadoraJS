class CalcControler {
    
    constructor (){
        this._displayCalc = "0"; //Atributos privados (_atributo)
        this._dataAtual; //Atributos, são parecidos com varaveis, porem, com mais funcionalidades
    }


    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(valor) {
        this._dataAtual = valor;
    }

}