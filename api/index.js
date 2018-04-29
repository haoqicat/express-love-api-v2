const express = require('express')
const app = express()

// mongoose START
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-love-api')
const db = mongoose.connection
db.on('error', () => console.error('Mongo Failed to Connect!!!!'))
db.on('connected', () => console.log('Mongo Connected'))
// mongoose END

const Post = require('./models/post')

app.post('/post', () => {
  const post = new Post({ title: 'mogoose usage' })
  post.save()
})

app.get('/', (req, res) => {
  res.send('Hello Client')
})

app.listen(3000, () => console.log('running on port 3000...'))
