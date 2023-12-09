/*
    * Abstract classes are classes that cannot be or was not instantiated
    * it is used to create a base class for other classes to extend from
*/

abstract class Person {
    protected name: string;
    protected age: number;
    abstract gender: string;
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}

class Employee extends Person {
    gender: string;
    salary: number
    private _position: string

    constructor(name: string, age: number, salary: number, _position: string, gender: string) {
        super(name, age)
        this.salary = salary
        this._position = _position
        this.gender = gender
    }

    get position() {
        return this._position
    }

    set position(position: string) {
        this._position = position
    }
}

let john = new Employee("John", 30, 1000, "Developer", "Male")
john.position = "Pilot"

console.log(john.position)
