import express, { Router } from 'express'
import Task from '../models/task'

const api: Router = express.Router();

api.get('/tasks',async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

export default api