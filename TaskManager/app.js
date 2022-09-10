const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const port = 3000;

app.use(express.json());

app.use('/api/v1/task', tasks)

app.listen(port,console.log(`Server is listing on ${port}...`))