let myLibrary = [];

class Book {
    constructor(author, title, pages, read = false) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}
// Adicionar livros no array principal
function addBookToLibrary(book) {
  myLibrary.push(book)
}
//Criando livros para template inicial
const historyBook = new Book("Gilberto", "Era renascentista", 120, false)
const geographyBook = new Book("Jailson", "Movimento das placas tectônicas", 60, false)
addBookToLibrary(historyBook)
addBookToLibrary(geographyBook)


//Criando cards para livros e inserindo na section
function createCardBook(array){
  for(let item of array){
    const section = document.querySelector(".Books-Case")
    const card = document.createElement("div")
    const title = document.createElement("h1")
    const author = document.createElement("h5")
    const content = document.createElement("p")
    const readed = document.createElement("p")
    const read = item.read
    if(!read){
      readed.innerHTML = "Ainda não aberto"
      readed.className = 'not-readed'
    }
    title.innerHTML = item.title;
    author.innerHTML = item.author;
    content.innerHTML = `Pages: ${item.pages}`
    content.className = "pages"
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(content)
    card.appendChild(readed)
    card.className = 'card'
//Onclick vai trocar os estado do readed
    card.addEventListener("click", ()=>{
      readed.classList.replace('not-readed', 'readed')
      readed.innerHTML = "Leitura em progresso"
    })
    section.appendChild(card)
  }
}

createCardBook(myLibrary)
