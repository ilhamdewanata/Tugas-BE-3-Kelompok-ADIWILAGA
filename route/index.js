import express from 'express'
import notesRoute from './notes.Route.js'

const router = express()

router.use(notesRoute)


export default router