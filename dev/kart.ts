/// <reference path="gameObject.ts" />

class Kart extends GameObject {

    private speed:  number;
    private driver: Driver;
    private posX:   number;
    private posY:   number;
            
    constructor() {
        super("kart", document.body);

        this.speed  = 3;
        this.posX   = 0;
        this.posY   = 100;

        Message.logMessage("Created a kart!");
    }

    public setDriver(d: Driver) {
        this.driver = d;
    }

    public getDiv() {
        return this.div;
    }

    public move() {
        this.posX += this.speed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
 
}