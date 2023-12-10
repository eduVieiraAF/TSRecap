/*
    * readonly is a modifier that can be used to make a property readonly
*/

class Person {
    name: string = "Edu Vieira"
    age: number = 41
    readonly gender: string = "Male"
}

let person = new Person()
person.name = "John Doe"
person.age = 30
// person.gender = "Female"  // error

console.log(person)