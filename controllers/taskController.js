import Task from '../models/taskSchema.js';

//GET all tasks
const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
        return
    }
}

//GET individual task
const getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            res.status(404).json({message: 'Task not found'});
        } else{
            res.status(200).json({
                message: `Task with id found`, task
            });
        }
    } catch (e) {
        next(e);
        return
    }
}

//Create new task
const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            message: "New task successfully created", task
        });
    } catch (e) {
        next(e);
        return
    }
}

//Update existing task
const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)
        if (!task) {
            res.status(404).json({message: 'Task not found'});
        } else {
            res.status(201).json({
                message: "Task successfully modified:", task
            })
        }
    } catch (e) {
        next(e);
        return
    }
}

//Delete a task
const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.body);
        if (!task) {
            res.status(404).json({message: 'Task not found'});
        } else {
            res.status(202).json({messgae: "Task Succesfully Deleted"})
        }
    } catch (e) {
        next(e);
        return;
    }
}

export {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};