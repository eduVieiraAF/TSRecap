let arr: Array<number> = [1, 2, 3, 4, 5];
let arr2: number[] = [1, 2, 3, 4, 5];
// let arr3: [number] = [1, 2, 3, 4, 5];
let arr4: [string, number, boolean] = ["a", 1, true];
let arr5: [string, number, boolean?] = ["a", 1];
let arr6: string[] = ["a", "b", "c", "no limit"];
let arr7: Array<string | number | boolean> = ["a", "b", "c", 5, 78, false];


// arr.forEach((num) => console.log(num));
// arr2.forEach((num) => console.log(num));
// arr4.forEach((it) => console.log(it));
// arr5.forEach((it) => console.log(it));
// arr6.forEach((string) => console.log(string));
// arr7.forEach((it) => console.log(it));

let obj1 : {
    name: string,
    age: number,
    job: boolean
} = {
    name: "John",
    age: 30,
    job: true
}

let obj2: Array<{
    name: string,
    age: number,
    job: boolean
}> = [
    {
        name: "John",
        age: 30,
        job: true
    },
    {
        name: "Jane",
        age: 25,
        job: false
    }
]

console.log(obj1)
console.log(obj2)
console.log(typeof obj2)
console.log(obj2[0].job)
console.log(obj2[1].name)