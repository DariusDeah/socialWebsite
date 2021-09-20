import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PostSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  location: { type: String, required: true },
  price: { type: Number, min: 0 },
  tag: { type: String },
  date: {
    type: Date.now()
  },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

PostSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
