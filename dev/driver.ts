/// <reference path="gameObject.ts"/>

class Driver extends GameObject {
            
    constructor(parent: HTMLElement) {
        super("driver", parent);

        Message.logMessage("Created a driver!");
    }
}