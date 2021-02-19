const express = require('express')
const { Types } = require('mongoose')
const multer = require('multer')
const consola = require('consola')
const router = express.Router()

// Image Upload Config
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './static/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })
// Limit FileSize in multer
// Example: limits: { fileSize: <1024 * 1024 * 5>

// Mongoose Models
const Post = require('../models/post')


// GET ALL POST
router.get('/', (req, res) => {
  Post.find().select('title notes _id photo').exec().then(result => {

    const response = {
      count: result.length,
      post: result
    }

    res.status(200).json(response)
  }).catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
})

// UPDATE Post
router.patch('/:postId', (req, res) => {
  const { postId: id } = req.params;
  Post.updateOne({ _id: id }, { $set: req.body }).exec().then(() => {
    res.status(200).json({
      message: 'Post Updated Successfully'
    })
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})


// POST NEW POST
router.post('/', upload.single('photo') , (req, res) => {
  const post = new Post({
    _id: new Types.ObjectId(),
    title: req.body.title,
    task: req.body.task,
    notes: req.body.notes,
    photo: req.file.path
  })

  // Save Post
  post.save().then( result => {
    const {notes, _id, title, task, photo} = result;
    res.status(201).json({
        message: 'Created Post successfully',
        title,
        notes,
        task,
        photo,
        id: _id
      })
  }).catch((err) => {
    consola.error(`Unable to save post to DB ${err}`)
  })
})

// GET POST BY ID
router.get('/:postId', (req, res) => {
  const { postId: id } = req.params;
  Post.findById(id).select('title notes _id photo').exec().then(result => {
    if(result) {
      res.status(201).json({
        post: result
      })
    } else {
      res.status(400).json({message: 'No valid entry found for provided ID' })
    }
  }).catch(err => {
    console.log(err)
    res.status(500).json({error: err})
  })
})

// DELETE Post
router.delete('/:postId', (req, res) => {
  const { postId: id } = req.params;
  Post.deleteOne({_id: id}).exec().then(() => {
    res.status(200).json({
      message: 'Post deleted successfully'
    })
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router;
