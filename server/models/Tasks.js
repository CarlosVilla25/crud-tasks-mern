import mongoose from 'mongoose';

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Tasks', tasksSchema);
