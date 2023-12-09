const fn = (username: string, age?: number) => {
    if (!age) return `Hello ${username}`
    return `Hello ${username}, you are ${age} years old`
}

console.log(fn("Edu"))

const person : {
    name: string,
    age?: number
} = {
    name: "Edu",
}

console.log(`Hello ${person.name}`)