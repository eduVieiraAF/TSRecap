const request: string = "onion rings"
const count: number = 5
const tip: boolean = false


function order(request: string, count: number, tip: boolean) {
    if (!tip) {
        console.log("Tip not included")
        console.log(`Your total is $${count * 14.99}`)
    } else {
        console.log("Tip included")
        console.log(`Your total is $${(count * 14.99) * 1.15 }`)
    }

    console.log(`Enjoy your ${request}`)
}

order(request, count, tip)