
const getElementFromDocument = (id) => {
    return document.querySelector(`#${id}`)
}

class Boton {

    element; //* htmlelement
    num; //* digito = number | string

    constructor(element, num) {
        this.element = element;
        this.num = num;
    }

    addEvent() {
        this.element.addEventListener('click', ()=>{
            console.log(this.num);
        })
    }
}

new Boton(getElementFromDocument("punto"),".").addEvent();

new Boton(getElementFromDocument("cinco"), 5).addEvent()
