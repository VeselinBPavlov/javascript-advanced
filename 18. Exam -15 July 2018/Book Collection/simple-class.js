class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = Number(shelfCapacity);
    }

    get room() {
        return this._room;
    }
    set room(room) {
        if (room === 'livingRoom' || room === 'bedRoom' || room === 'closet') {
            return this._room = room;
        } else {
            throw new Error(`Cannot have book shelf in ${room}`);
        }
    }

    get shelfCondition() {
        return this.shelfCapacity;
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {
            title: bookName,
            author: bookAuthor
        };

        if (genre !== undefined) {
            book.genre = genre;
        }

        if (this.shelfCapacity === 0) {
            this.shelf.shift();
            this.shelfCapacity++;
        }

        this.shelf.push(book);
        this.shelfCapacity--;

        this.shelf.sort((a, b) => a.author.localeCompare(b.author));
        return this.shelf;
    }

    throwAwayBook(bookName) {
        for (let i = 0; i < this.shelf.length; i++) {
            let searchedBook = this.shelf[i].title;
            if (bookName === searchedBook) {
                this.shelfCapacity++;
                this.shelf.splice(i, 1);
                return;
            }
        }
    }

    showBooks(genre) {
        let printBooksInGenre = '';
        printBooksInGenre += `Results for search "${genre}":`;
        for (let book of this.shelf) {
            if (book.genre === genre) {
                printBooksInGenre += `\n\uD83D\uDCD6 ${book.author} - "${book.title}"`;
            }
        }
        return printBooksInGenre;
    }

    toString() {
        let print = '';
        if (this.shelf.length === 0) {
            return print += "It's an empty shelf";
        }

        print += `"${this.shelfGenre}" shelf in ${this._room} contains:`;
        for (let book of this.shelf) {
            print += `\n\uD83D\uDCD6 "${book.title}" - ${book.author}`;
        }
        return print;
    }
}

// Test.
/*let livingRoom = new BookCollection("Programming", "livingRoom", 5);
    livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
    livingRoom.addBook("Introduction to Programming with Java", "Svetlin Nakov")
    livingRoom.addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());*/

//let garden = new BookCollection("Programming", "garden");

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
bedRoom.addBook("Pod Igoto", "Pod Igoto");
bedRoom.addBook("Game of thrones", "George RR Martin", "history");
bedRoom.throwAwayBook('Game of thrones');
console.log(bedRoom.toString());
bedRoom.throwAwayBook('Pod Igoto');
bedRoom.throwAwayBook('Atlas of Remote Islands');
bedRoom.throwAwayBook('Paddle-to-the-Sea');
bedRoom.throwAwayBook('John Adams');
console.log(bedRoom.toString());



