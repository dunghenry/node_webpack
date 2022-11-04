const bookService = require('../services/book.service');
class bookController {
    static async createBookController(req, res) {
        const { title, description, author } = req.body;
        if (!title || !description || !author) {
            return res.status(400).json({ message: 'Missing title or description or author' });
        }
        try {
            const rs = await bookService.createBookService({ title, description, author });
            return res.status(201).json(rs);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async getBooksController(req, res) {
        try {
            const rs = await bookService.getBooksService();
            // console.log(rs);
            return res.status(200).json(rs);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async getBookController(req, res) {
        const id = req.params.id;
        try {
            const rs = await bookService.getBookService(id);
            return res.status(200).json(rs);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async updateBookController(req, res) {
        const id = req.params.id;
        const { title, description, author } = req.body;
        if (!title || !description || !author) {
            return res.status(400).json({ message: 'Missing title or description or author' });
        }
        try {
            const rs = await bookService.updateBookService({ id, title, description, author });
            return res.status(200).json(rs);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async deleteBookController(req, res) {
        const id = req.params.id;
        try {
            const rs = await bookService.deleteBookService(id);
            return res.status(200).json(rs);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = bookController;
