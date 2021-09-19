import { Mongoose, Schema } from 'mongoose'

export const PostSchema = new Schema({
  title: { type: String },
  text: { type: String },
  img: { type: String }

})
