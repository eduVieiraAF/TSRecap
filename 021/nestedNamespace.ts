namespace Person {
    export namespace Person1 {
        export let name: string = 'Eduardo'
    
        export const greet = () =>  console.log(`Hello, my name is ${name}`)
    }

    export namespace Person2 {
        export let name: string = 'Sofia'
    
        export const greet = () =>  console.log(`Hello, my name is ${name}`)
    }
}

Person.Person1.name = 'John'

console.log(Person.Person1.greet())
console.log(Person.Person2.greet())