

const getElementFromDocument = (id: string) => {
    return document.querySelector(`#${id}`)
}


class Boton {

    element: HTMLElement;
    num: number;

    constructor(element: HTMLElement, num: number) {
        this.element = element;
        this.num = num;
    }

    

    addEvent() {
        this.element.addEventListener('click', ()=>{
            console.log(this.num);
        })
    }

}







