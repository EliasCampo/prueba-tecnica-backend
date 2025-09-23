const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());

app.use(cors());
app.listen(8000);


let task = [
    {
        id: 1, 
        title: 'tarea 1',
        description: 'descripcion de la tarea 1',
        priority: 'hard'
    },
    {
        id: 2, 
        title: 'tarea 2',
        description: 'descripcion de la tarea 2',
        priority: 'medium'
    }, 
];

app.get('/tasks', (req, res)=>{
    res.json(task);
})






