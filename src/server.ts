import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { errorHandler } from './middleware/error-handler'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(errorHandler)

const PORT = process.env.PORT || 2000

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))