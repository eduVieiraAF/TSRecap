/*
    * Public - accessible from everywhere
    * Private - accessible only from within the class itself
    * Protected - accessible from within the class and its subclasses
*/

class furniture {
    private name: string
    private type: string
    private color: string
    private foldOut: boolean

    constructor(name: string, type: string, color: string, foldOut: boolean) {
        this.name = name
        this.type = type
        this.color = color
        this.foldOut = foldOut
    }

    public showCase() {

        if (this.foldOut) {
            console.log(`A(n) ${this.color} ${this.name} of type ${this.type} and is a foldout`)
            this.isFoldOut()
        }
        else console.log(`A(n) ${this.color} ${this.name} of type ${this.type}`)
    }

    protected isFoldOut() {
        if (this.foldOut) console.log('\tIt needs special handling')
    }
}

let couch = new furniture('couch', 'furniture', 'brown', true)
let desk = new furniture('desk', 'furniture', 'black', false)

couch.showCase()
desk.showCase()
