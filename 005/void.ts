/*
    * Void means nothing will be returned
*/

// the void type is used when a function does not return anything like below
    // : void is optional
let request = (order: string): void => {
    if (order.length > 0) console.log(`Your order is ${order}`)
    else console.log("Your order is empty")
}

request("burger")


// this is a function that returns a number for instance
let sum = (num1: number, num2: number): number => {
    return num1 + num2
}

console.log(sum(11, 42))

// this is a function that returns a string 
let capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize("hello"))