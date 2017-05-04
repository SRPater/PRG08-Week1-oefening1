var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(tag, parent) {
        this.div = document.createElement(tag);
        parent.appendChild(this.div);
    }
    return GameObject;
}());
var Driver = (function (_super) {
    __extends(Driver, _super);
    function Driver(parent) {
        var _this = _super.call(this, "driver", parent) || this;
        Message.logMessage("Created a driver!");
        return _this;
    }
    return Driver;
}(GameObject));
var Kart = (function (_super) {
    __extends(Kart, _super);
    function Kart() {
        var _this = _super.call(this, "kart", document.body) || this;
        _this.speed = 3;
        _this.posX = 0;
        _this.posY = 100;
        Message.logMessage("Created a kart!");
        return _this;
    }
    Kart.prototype.setDriver = function (d) {
        this.driver = d;
    };
    Kart.prototype.getDiv = function () {
        return this.div;
    };
    Kart.prototype.move = function () {
        this.posX += this.speed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Kart;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.kart = new Kart();
        var d = new Driver(this.kart.getDiv());
        this.kart.setDriver(d);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.kart.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Message = (function () {
    function Message() {
    }
    Message.logMessage = function (str) {
        console.log(str);
    };
    return Message;
}());
//# sourceMappingURL=main.js.map