/*
    * Interfaces are used to define the structure of an object
*/

interface IPerson {
    readonly name: string,
    age: number,
    gender?: string,
    job?: string,
    concat(): string
}

const person: IPerson = {
    name: "John",
    age: 30,
    gender: "male",
    concat: () => {
        return `Hello, my name is ${person.name} and I am ${person.age} years old`
    }
}

console.log(person)
console.log(person.concat())

class Student implements IPerson {
    readonly name: string
    age: number
    gender: string
    job?: string

    constructor(name: string, age: number, gender: string, job: string) {
        this.name = name
        this.age = age
        this.gender = gender
        this.job = job
    } 
    
    concat(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    }
}

const student1 = new Student("Alex", 33, "male", "student")
console.log(student1.concat())