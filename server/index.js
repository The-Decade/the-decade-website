const express = require('express')
const cors = require('cors')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const contactRoute = require('./routes/contact')

const app = express()

app.use(cors({
  origin: [
    'https://the-decade.co.zw',
    'https://www.the-decade.co.zw',
    'https://the-decade-website.vercel.app',
    'http://localhost:5173',
  ],
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'The Decade API is running' })
})

app.use('/api/contact', contactRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))