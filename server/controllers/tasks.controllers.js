import Tasks from '../models/Tasks.js';

export const getTasks = async (req, res) => {
  try {
    const response = await Tasks.find();
    if (response.length === 0) return res.sendStatus(404);
    res.send(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const response = await Tasks.findById({ _id: req.params.id });
    if (!response) return res.sendStatus(404);
    return res.json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Task not found', error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const response = await Tasks.insertMany(req.body);
    res.send(response);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Task cannot be created ', error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) return res.sendStatus(404);
    await Tasks.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json({
      message: 'update Task',
      id: req.params,
      body: req.body,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Task cannot be updated ', error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const response = await Tasks.findByIdAndDelete(req.params.id);
    if (!response) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Task cannot be deleted ', error: error.message });
  }
};
