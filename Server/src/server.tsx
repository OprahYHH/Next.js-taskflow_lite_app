import express, { Application } from 'express'
import mongoose from 'mongoose'
import apiRoutes from './routes/api'

const app: Application = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.dpyshng.mongodb.net/`

app.use(express.json())

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})