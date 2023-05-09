import { log } from 'console'
import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM ropa')
    res.json(rows)
})

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "hello world" as RESULT');
    res.json(result[0])
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO Ropa (nombre, precio, cantidad) VALUES ("Camisa JLB", 499, 5)')
    res.json(result)
})

app.listen(PORT)
console.log('server on port ', PORT)