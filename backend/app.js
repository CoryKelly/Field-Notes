const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const { json, urlencoded } = require('body-parser')
const consola = require('consola')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 3000

// Routes
const tasksRoutes = require('./api/routes/tasks')
const postRoutes = require('./api/routes/post')


// Middleware
app.use(morgan('dev'))
app.use(urlencoded({extended: false}))
app.use(json())
app.use(cors())
app.use('/tasks', tasksRoutes)
app.use('/post', postRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

// Connect DB & Start Server
const main = async () => {
  try{
    await mongoose.connect(process.env.APP_DB, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })
    consola.success("DataBase Connected..")
    app.listen(port, () => {
      consola.success(`App listening at http://localhost:${port}`)
    })
  } catch (e) {
    consola.error(`Unable to start the server ${e.message}`)
  }
}
main().then()

