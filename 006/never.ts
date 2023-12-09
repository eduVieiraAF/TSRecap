/*
    *  never is used  there is no return value or error also in an infinite loop
*/

const error = (): never => {
    throw new Error("Error message");
}

// console.log(error())

const loop = (): never => {
    while (true) {
        console.log("Hello");
    }
}

// loop() will cause the terminal to crash

const validate = (value: any) => {
    if (typeof value === "string") {
        console.log(typeof value);
    } else if (typeof value === "number") {
        console.log(typeof value);
    } else if (typeof value === "boolean") {
        console.log(typeof value);
    } else error();
}

validate({type: false})