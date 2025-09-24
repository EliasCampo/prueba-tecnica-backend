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

app.delete('/task/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const taskFound = task.find((t) => t.id === id);
    if(!taskFound) return res.status(404).json({message: 'Task not found'});
    task = task.filter((t) => t.id !==id);
    res.sendStatus(204);
})

app.post('/createTask', (req, res) => {
    const { title, description } = req.body;

    const newTask = {
        id: task.length + 1,
        title,
        description
    };
    task.push(newTask);
    res.status(201).json(newTask);
});

app.get('/task/:id', (req, res) => {
    const { id } = req.params;
    const taskFound = task.find(t => t.id === Number(id));
    res.json(taskFound)
})

app.put('/task/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const editTask = task.findIndex(t => t.id === Number(id));

    task[editTask] = {
        ...task[editTask],
        title: title ?? task[editTask].title,
        description: description ?? task[editTask].description,
    };
    res.json(task[editTask])


})






