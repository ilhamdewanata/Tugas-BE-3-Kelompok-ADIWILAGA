import express from 'express'
import { deleteDataNotes, getDataNotes, getDataNotesById, insertDataNotes, updateDataNotes, getLandingPage } from '../controller/notesCntrl.js'

const router = express.Router()

router.get('/', getLandingPage)
router.get('/notes', getDataNotes)
router.get('/notes/:id', getDataNotesById)
router.post('/notes', insertDataNotes)
router.put('/notes/:id', updateDataNotes)
router.delete('/notes/:id', deleteDataNotes)


export default router