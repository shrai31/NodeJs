const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connectDb');
require('dotenv').config();

const port = 4200;

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listing on ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
