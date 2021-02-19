const { Schema, Types, model } = require('mongoose')

const postSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  notes: String,
  task: String,
  product: String,
  amount: Number,
  units: String,
  zone: String,
  mowHeight: Number,
  date: { type: Date, default: Date.now },
  photo: String
})

module.exports = model('Post', postSchema)
