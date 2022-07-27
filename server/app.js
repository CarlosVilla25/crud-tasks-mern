import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(tasksRoutes);
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
