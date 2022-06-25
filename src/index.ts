import express from 'express'
import { URLController } from './controller/URLController'

const api = express()
api.use(express.json())

const database = new MongoController()
database.connect()

const URLController = new URLController()
api.post ('/shorten', URLController.shorten)
api.get('/:hash', URLController.redirect)

api.listen(5000, () => console.log('Express Listening'))

