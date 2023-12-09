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

    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary
    }
}

class Student extends Person {
    course: string

    constructor(name: string, age: number, course: string) {
        super(name, age)
        this.course = course
    }
}

let pablo = new Employee('Pablo', 30, 75000)
let jose = new Student('Jose', 20, 'Computer Science')

console.log(pablo)
console.log(jose)

jose.greet()