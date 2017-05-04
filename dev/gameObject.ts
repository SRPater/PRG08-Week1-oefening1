abstract class GameObject {

    protected div:    HTMLElement;

    constructor(tag: string, parent: HTMLElement) {
        this.div = document.createElement(tag);
        parent.appendChild(this.div);
    }

}