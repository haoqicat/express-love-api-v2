const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

// mongoose START
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-love-api')
const db = mongoose.connection
db.on('error', () => console.error('Mongo Failed to Connect!!!!'))
db.on('connected', () => console.log('Mongo Connected'))
// mongoose END

const Post = require('./models/post')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/post', async (req, res) => {
  const p = new Post(req.body)
  try {
    const post = await p.save()
    res.json(post)
  } catch (err) {
    res.status(500).json({ msg: '保存失败', err })
  }
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.status(500).json({ msg: '读取失败', err })
  }
})

app.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
  } catch (err) {
    res.status(500).json({ msg: '读取失败', err })
  }
})

app.put('/post/:id', async (req, res) => {
  try {
    const p = await Post.findById(req.params.id)
    for (prop in req.body) {
      p[prop] = req.body[prop]
    }
    const post = await p.save()
    res.json(post)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/post/:id', async (req, res) => {
  try {
    const p = await Post.findById(req.params.id)
    const post = await p.remove()
    res.json(post)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/', (req, res) => {
  res.send('Hello Client')
})

app.listen(3000, () => console.log('running on port 3000...'))
