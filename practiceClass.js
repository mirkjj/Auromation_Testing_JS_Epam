class Animal {
    constructor (move){
        this.move=move;
    }
    isMove(){
        console.log(`This animal is ${this.move}`);
    }
}

class Cat extends Animal {
    constructor(move, name){
        super(move);
        this.name=name;
    }

    CatInfo(){
        console.log(`This cat is ${this.move} and cat's name is ${this.name}`);
    }
}

const napoleon = new Cat('walking', 'Napoleon');
napoleon.CatInfo();