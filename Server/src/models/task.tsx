import mongoose, { Schema, Document } from "mongoose";

interface Tasks extends Document {
    content: string;
}

const TaskSchema: Schema = new Schema({
    content: { type: String, require: true }
})

export default mongoose.model<Tasks>('Task', TaskSchema)