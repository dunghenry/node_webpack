const book = require('./book.route');
const routes = (app) => {
    app.use('/api/v1/books', book);
};

module.exports = routes;
