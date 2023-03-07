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
  myLibrary.push(book);
}
//Criando livros para template inicial
const historyBook = new Book("Gilberto", "Era renascentista", 120, false);
const geographyBook = new Book(
  "Jailson",
  "Movimento das placas tectônicas",
  60,
  false
);
addBookToLibrary(historyBook);
addBookToLibrary(geographyBook);
//Deletar os cards
function deleteCards() {
  const section = document.querySelector(".Books-Case");
  section.innerText = "";
}

//Criando cards para livros e inserindo na section
function createCardBook(array) {
  for (let item of array) {
    const section = document.querySelector(".Books-Case");
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const author = document.createElement("h5");
    const content = document.createElement("p");
    const readed = document.createElement("p");
    const deleteButton = document.createElement("button");
    //adicionando a função de deletar o card caso clicado
    deleteButton.addEventListener("click", () => {
      const parent = deleteButton.parentNode; // elemento "pai" do botão
      parent.remove();
    });
    deleteButton.className = "deleteBtn";
    const read = item.read;
    if (!read) {
      readed.innerHTML = "Ainda não aberto";
      readed.className = "not-readed";
    } else {
      readed.innerHTML = "Leitura em progresso";
      readed.className = "readed";
    }
    title.innerHTML = item.title;
    author.innerHTML = item.author;
    content.innerHTML = `Pages: ${item.pages}`;
    content.className = "pages";
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(content);
    card.appendChild(readed);
    card.appendChild(deleteButton);
    card.className = "card";
    //Onclick vai trocar os estado do readed
    card.addEventListener("click", () => {
      readed.classList.replace("not-readed", "readed");
      readed.innerHTML = "Leitura em progresso";
    });
    section.appendChild(card);
  }
}
createCardBook(myLibrary);
//Adicionar livros pelo usuário
const form = document.querySelector(".formBook");
const userTitle = document.querySelector("#titleBook");
const userAuthor = document.querySelector("#authorBook");
const userPages = document.querySelector("#pages");
const userReaded = document.querySelector("#readed");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteCards();
  var userBook = new Book(
    userAuthor.value,
    userTitle.value,
    userPages.value,
    userReaded.checked
  );
  addBookToLibrary(userBook);
  createCardBook(myLibrary);
});
