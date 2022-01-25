class CalcControler { //classe: Conjunto de atributos e metodos.

    constructor() {
        this._displayCalcEL = document.querySelector("#display");
        this._dateEL = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }


    initialize(){

        this._dateEL.innerHTML = "24/01/2022";
        this._timeEL.innerHTML = "17:55";
    }

    get displayCalc() {
        return this._displayCalcEL.innerHTML ;
    }

    get currentDate() {
        return this._currentDate;
    }

    set displayCalc(valor) {
        this._displayCalc.innerHTML = valor
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }

}