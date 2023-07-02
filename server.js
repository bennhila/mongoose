const express = require('express')
const userRoutes=require('./routers/userRouter')
const personRouter = require('./routers/personRouter')
const app = express()
const port = 5000
app.use(express.json())
const connectDB = require('./helpers/connectDB')

connectDB()
app.use('/user',userRoutes)
app.use('/person',personRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))