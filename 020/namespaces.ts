/*
    * Namespaces are used to group code together
    it is not allowed to create variables or methods with the same name so namespace is used to group code
    and shifts the scope allowing to create variables and methods with the same name in different files
*/

export namespace Person1 {
    export let _name = "John";

    export const add = (a: number, b: number): number => a + b;
}

// console.log(Person1._name);
// console.log(Person1.add(1, 2));
