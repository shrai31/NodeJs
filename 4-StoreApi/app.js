require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
// middleware

app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Routes</a>');
});

app.use('/api/v1/products', productsRouter);
//products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4200;
const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}....`));
  } catch (error) {}
};

start();
