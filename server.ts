import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
const getCode = () => {
    return process.env.CORRECT_CODE?.toString() || '1234'
}
const getPort = () => {
    return process.env.PORT?.toString() || '3000'
}
app.use(express.static('build'))

app.post('/', (req, res) => {
    if (!req || !req.body) return res.status(400).json(false)
    if (req.body.code === getCode()) return res.status(200).json(true)
    return res.status(200).json(false)
})

app.listen(getPort(), () => {
    console.log('Listening port ' + getPort())
})