class CalcControler{

    constructor (){

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl        = document.querySelector("#data");
        this._timeEl        = document.querySelector("#hora");
        this._diplayCalc; //Atributo privado
        this._dataAtual;
        this.initialize();

    }

    initialize () {

        
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc (){

        return this._displayCalcEl.innerHTML;

    }

    get currentDate(){
        return new Date();
    }

    set displayCalc (value) {

        this._displayCalc = value
    }

    set currentDate(value){
        this._dataAtual = value
    }

}