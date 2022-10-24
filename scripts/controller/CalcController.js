class CalcControler {

  constructor() {

    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._diplayCalc; //Atributo privado
    this._dataAtual;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize() {

    this.setdisplayDateTime();

    setInterval(() => { //Utiliza para algo que seja intermitente 

      this.setdisplayDateTime();

    }, 1000); //1 seg

  }

  addEventListenerAll(elements, events, fn) {

    events.split(" ").forEach(event => {
      elements.addEventListener(event, fn, false);
    });

  }

  initButtonsEvents() {

    let buttons = document.querySelectorAll("#buttons > g, #parts > g"); // > Celetores filhos

    buttons.forEach((btn, index) => {

      this.addEventListenerAll(btn, 'click drag ', e => {

        console.log(btn.className.baseVal.replace("btn-", ""));

      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
        btn.style.cursor = "pointer";
      })

    })
  }

  setdisplayDateTime() {

    this.displayDate = this.currentDate.toLocaleDateString(this._locale, { //Data baseada no local de origem
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale); //Hora baseada no local de origem

  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayTime(value) {
    return this._timeEl.innerHTML = value;
  }

  set displayDate(value) {
    return this._dateEl.innerHTML = value;
  }

  get displayCalc() {

    return this._displayCalcEl.innerHTML;

  }

  get currentDate() {
    return new Date();
  }

  set displayCalc(value) {

    this._displayCalc = value
  }

  set currentDate(value) {
    this._dataAtual = value
  }

}
