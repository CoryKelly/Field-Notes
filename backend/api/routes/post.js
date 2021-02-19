const express = require('express')
const { Types } = require('mongoose')
const consola = require('consola')
const router = express.Router()

// Mongoose Models
const Post = require('../models/post')


// GET ALL POST
router.get('/', (req, res, next) => {
  Post.find().exec().then(result => {
    console.log(result)
    res.status(200).json(result)
  }).catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
})

// POST NEW POST
router.post('/', (req, res, next) => {

  const post = new Post({
    _id: new Types.ObjectId(),
    title: req.body.title,
    notes: req.body.notes
  })

  // Save Post
  post.save().then( res => {
    consola.success(`Post saved to the DB ${res}`)
  }).catch((err) => {
    consola.error(`Unable to save post to DB ${err}`)
  })

  res.status(201).json({
    createdPost: post
  })
})

// GET POST BY ID
router.get('/:postId', (req, res, next) => {
  const { postId: id } = req.params;
  Post.findById(id).exec().then(result => {
    if(result) {
      res.status(201).json({
        createdPost: result
      })
    }
    res.status(400).json({message: 'No valid entry found for provided ID' })
  }).catch(err => {
    console.log(err)
    res.status(500).json({error: err})
  })
})

// DELETE Post
router.delete('/:postId', (req, res) => {
  const { postId: id } = req.params;
  Post.remove({_id: id}).exec().then(result => {
    console.log(result)
    res.status(200).json(result)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router;
