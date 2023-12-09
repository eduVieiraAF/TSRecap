class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}

class Employee extends Person {
    salary: number
    private _position: string

    constructor(name: string, age: number, salary: number, _position: string) {
        super(name, age)
        this.salary = salary
        this._position = _position
    }

    get position() {
        return this._position
    }

    set position(position: string) {
        this._position = position
    }
}

let john = new Employee("John", 30, 1000, "Developer")
john.position = "Pilot"

console.log(john.position)
