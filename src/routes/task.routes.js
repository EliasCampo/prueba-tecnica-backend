const { Router } = require('express');
const {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/task.controller');

const router = Router();

// Preserve same endpoints
router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/createTask', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

module.exports = router;


