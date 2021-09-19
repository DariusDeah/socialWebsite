import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PostSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  location: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
