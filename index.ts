// Aguiar Jr - Federal University Of Ceara
// Computer science - Crateus campus - 2022

export class oneClass{
    constructor(
        private firstName:string,
        public lastName: string,
        protected age: number,
    ){}

    public getfirstName(): string { 
        return this.firstName; 
    }

    public getlastName(): string {
        return this.lastName;
    }

    public getAge(): number {
        return this.age;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}


// using heritage 
export class shape {
    //
}

export class clicle extends shape {
    //
}

// using agreeable
export class car {
    private Motor: motor;;

    constructor(Motor: motor){
        this.Motor = Motor;
    }
}

export class motor{
    // codigo omitido
}

export class Printer{
    print(document : Document) : void {
        console.log(`Printing ${document}`);
    }
}

export class Document{
    private name: string;
}

// Interface examples
export interface ControleRemoto {
    play(): void;
    pause(): void;
}

export interface ControleSom extends ControleRemoto{
    mudarRadio(): void;
}

export class BlueRay implements ControleRemoto{
    play(): void{}
    pause(): void{}
}

export class Som implements ControleSom{
    mudarRadio(): void {}
    pause(): void {}
    play(): void {}
}

//
export abstract class Animal{
    protected abstract makeNoise(): string;

    makeSound(): void {
        console.log(this.makeNoise());
    }
}

export class Dog extends Animal{
    protected makeNoise(): string {
        return "woof or au au";
    }
}

const dog = new Dog();
dog.makeSound(); // woof or auau, we use this implements in 