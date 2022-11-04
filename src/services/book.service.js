const Book = require('../models/book.model');
class bookService {
    static async createBookService({ title, description, author }) {
        try {
            const newBook = new Book({ title, description, author });
            const savedBook = await newBook.save();
            return savedBook;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
    static async getBooksService() {
        try {
            const books = await Book.find();
            return books;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
    static async getBookService(id) {
        try {
            const book = await Book.findById(id);
            if (!book) {
                const data = { message: 'Book not found!' };
                return data;
            }
            return book;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
    static async updateBookService({ id, title, description, author }) {
        try {
            const book = await Book.findByIdAndUpdate(
                id,
                { title, description, author },
                { new: true },
            );
            if (!book) return { message: 'This product does not exist' };
            return book;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
    static async deleteBookService(id) {
        try {
            const book = await Book.findByIdAndDelete(id);
            if (!book) return { message: 'This product does not exist' };
            return { message: 'Deleted product successfully!!!' };
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}

module.exports = bookService;
