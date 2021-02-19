const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  notes: String,
  task: { type: String, required: true },
  product: String,
  amount: Number,
  units: String,
  zone: String,
  mowHeight: Number,
  date: { type: Date, default: Date.now, required: true },
  photo: { type: String, required: true }
})

module.exports = model('Post', postSchema)
