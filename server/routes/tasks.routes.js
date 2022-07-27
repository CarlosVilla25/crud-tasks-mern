import { Router } from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controllers.js';

const router = Router();

router.get('/api/v1/tasks', getTasks);
router.get('/api/v1/task/:id', getTask);
router.post('/api/v1/task', createTask);
router.put('/api/v1/task/:id', updateTask);
router.delete('/api/v1/task/:id', deleteTask);

export default router;
