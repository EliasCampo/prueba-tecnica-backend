const { tasks } = require('../data/tasks');

function getAllTasks(req, res) {
    res.json(tasks);
}

function getTaskById(req, res) {
    const { id } = req.params;
    const taskFound = tasks.find(t => t.id === Number(id));
    res.json(taskFound);
}

function createTask(req, res) {
    const { title, description, priorityTask } = req.body;

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        priorityTask
    };
    tasks.push(newTask);
    res.status(201).json({'result': 'ok', 'data': newTask.id});
}

function deleteTask(req, res) {
    const id = parseInt(req.params.id);
    const taskFound = tasks.find((t) => t.id === id);
    if(!taskFound) return res.status(404).json({message: 'Task not found'});
    const index = tasks.findIndex((t) => t.id === id);
    tasks.splice(index, 1);
    res.sendStatus(204);
}

function updateTask(req, res) {
    const { id } = req.params;
    const { title, description, priorityTask } = req.body;
    const editTaskIndex = tasks.findIndex(t => t.id === Number(id));

    tasks[editTaskIndex] = {
        ...tasks[editTaskIndex],
        title: title ?? tasks[editTaskIndex].title,
        description: description ?? tasks[editTaskIndex].description,
        priorityTask: priorityTask ?? tasks[editTaskIndex].priorityTask
    };
    res.json({'result': 'ok', 'data': tasks[editTaskIndex].id});
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
};


