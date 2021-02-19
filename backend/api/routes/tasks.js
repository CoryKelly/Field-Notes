const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /tasks'
  })
})

router.get('/:taskId', (req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: 'Handling GET with ID',
    ID: taskId
  })
})

router.patch('/:taskId', (req, res) => {
  res.status(200).json({
    message: 'Task Updated!',
  })
})

router.delete('/:taskId', (req, res) => {
  res.status(200).json({
    message: 'Task Deleted!',
  })
})

module.exports = router;
