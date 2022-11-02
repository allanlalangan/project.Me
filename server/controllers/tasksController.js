const Task = require('../models/Task');
const Goal = require('../models/Goal');
const User = require('../models/User');

// @desc Get tasks
// @route GET /api/tasks
// @access Private
const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  await res.status(200).json(tasks);
};

// @desc Create new task
// @route POST /api/tasks
// @access Private
const createTask = async (req, res) => {
  const newTask = await new Task({
    user: req.user.id, // Retrieve user id from decoded token in auth middleware
    title: req.body.title,
    goal: req.body.goal ? req.body.goal : null,
  });

  try {
    await newTask.save();
    await res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'throw createTask error' });
    throw new Error('createTask error');
  }
};

// @desc Update task
// @route PUT /api/tasks/:id
// @access Private
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  try {
    if (!req.user) {
      res.status(401);
      throw new Error('Task user not found');
    } else if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('Task update not authorized');
    }

    await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    await res.status(200).json({
      message: `${user.name}'s tasks updated`,
      tasks: await Task.find({ user: user.id.toString() }),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// @desc Delete task
// @route DELETE /api/tasks/:id
// @access Private
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  try {
    if (!req.user) {
      res.status(401);
      throw new Error('Task user not found');
    } else if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('Task delete not authorized');
    }

    await goal.remove();
    await res.status(200).json({
      message: `${user.name}'s tasks updated`,
      deleted: task.title,
      tasks: await Task.find({ user: user.id.toString() }),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
