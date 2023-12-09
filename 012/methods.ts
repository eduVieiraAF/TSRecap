class Poem {
    author: string
    title: string
    poem: string

    constructor(author: string, title: string, poem: string){
        this.author = author
        this.title = title
        this.poem = poem
    }

    printPoem(){
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPoem: ${this.poem}`)
    }
}

const poem1 = new Poem("John Doe", "My First Poem", "This is my first poem.")

poem1.printPoem()