const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const connectDB = require('./configs/connect.db');
const routes = require('./routes');
const port = process.env.PORT || 4000;
const options = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*.js'],
};
const openapiSpecification = swaggerJsdoc(options);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
connectDB();
routes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.get('/', (req, res) => {
    return res.send('Hi');
});
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
