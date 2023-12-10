/*
    * static means that the property or method belongs to the class itself, not an instance of the class
    * static properties or methods can be accessed without creating an instance of the class
*/

class utils {
    static cloneObj(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)))
    }
}

// const utilsInstance = new utils()
const obj1: { name: string, age: number, job: boolean, gender: string, roles: Array<string> } = {
    name: "Edu",
    age: 41,
    job: true,
    gender: "male",
    roles: ["admin", "user"],
}

const obj2: { name: string, age: number, job: boolean, gender: string, roles: Array<string> } = {
    name: "Edu2",
    age: 41,
    job: false,
    gender: "male",
    roles: ["user"],
}

console.log(utils.cloneObj([obj1, obj2]))