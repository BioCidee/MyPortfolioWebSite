function NewBook (name, author,date) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookDate = date;
    this.idBook = crypto.randomUUID();

    function returnName(){
        return this.bookName;
    }
}

const myBookLibrary = [];

function AddBookToLibrary (_name, _author, _date) {
    myBookLibrary += new NewBook(_name, _author, _date);
}