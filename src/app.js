const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/task.routes');

const app = express();

app.use(express.json());
app.use(cors());

// Mount routes (no base path to preserve exact endpoints)
app.use(taskRouter);

module.exports = app;


