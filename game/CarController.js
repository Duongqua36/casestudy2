export default class CarController{

    constructor(options){
        this.road = options.road;
        this.car = options.car;
        this.init();
    }

    init(){
        document.addEventListener("keydown", (e)=>{
            switch(e.keyCode){
                case 37: // phím mũi tên trái
                    this.car.moveLeft();
                    break;
                case 39: // phím mũi tên phải
                    this.car.moveRight();
                    break;
                case 38:
                    this.car.speed += 1;
                    break;
                case 40:
                    this.car.speed -= 5;
                    break;
                default:
                    break;
            }
        });
    }


}