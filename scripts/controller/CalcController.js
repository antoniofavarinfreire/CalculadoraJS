class CalcControler {
    
    constructor (){
        this._displayCalc = "0"; //Atributos privados (_atributo)
        this._currentDate; //Atributos, são parecidos com varaveis, porem, com mais funcionalidades
        this.initialize();
    }

    initialize() {
        let displayCalcEl = document.querySelector('#display');
        let dateEl        = document.querySelector('#hora');
        let timeEl        = document.querySelector('#data');

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "20:52";
        timeEl.innerHTML = "20/02/2022";

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }

}

/*
    Manipular o DOM 
    D: document
    O: object
    M: Model

    BOM
    B: browser 
    O: object
    M: Model
*/