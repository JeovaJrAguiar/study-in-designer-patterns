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
    // codigo mitido
}

//console.log(carro);