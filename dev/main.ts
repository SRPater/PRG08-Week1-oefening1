/// <reference path="kart.ts"/>
/// <reference path="driver.ts"/>

class Game {

    private kart: Kart;
    
    constructor() {
        this.kart       = new Kart();
        let d: Driver   = new Driver(this.kart.getDiv());
        this.kart.setDriver(d);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.kart.move();
        requestAnimationFrame(() => this.gameLoop());
    }
    
} 

// Load
window.addEventListener("load", function() {
    new Game();
});