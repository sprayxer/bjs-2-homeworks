class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }
  
    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books =[];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i=0; i<this.books.length; i++) {
            for (let property in this.books[i]) {
                if (property === type) {
                    if (this.books[i][property] === value) {
                        return this.books[i];
                    }
                }
            }
        }
        return null; 
    }

    giveBookByName(bookName) {
        for (let i=0; i<this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let book = this.books[i];
                this.books.splice(i, 1);
                return book;
            } 
        }
        return null;
    } 
}

class Student {
    constructor(name) {
        this.name = name;
        this.subjects ={};
    }

    addMark(mark, subject) {
        if (mark < 2 && mark > 5) {
            return
        } else {
            if (this.subjects[subject] == undefined) {
                this.subjects = {[subject]: [mark]};    
            } else {
                this.subjects[subject].push(mark);
            }
        }
    }

    getAverageBySubject(subject) {
        if (this.subjects[subject] == undefined) {
            return 0;
        } else {
            let sumMarks = this.subjects[subject].reduce((sum, i) => sum + i);
            return sumMarks / this.subjects[subject].length;
        }
    }

    getAverage() {
        let allSubjects = Object.keys(this.subjects);
        let sum = 0;
        for (let i=0; i<allSubjects.length; i++) {
            sum += this.getAverageBySubject(allSubjects[i]);
        }
        return sum/allSubjects.length;
    }
}