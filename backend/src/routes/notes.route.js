import {Router} from 'express';
import { getAllNotes, createNote, updateNote, deleteNote } from '../controllers/notes.controller.js';
import authenticateToken from '../middleware/auth.middleware.js';

const router = Router();

router.route('/').get(authenticateToken, getAllNotes).post(authenticateToken, createNote);
router.route('/:id')
.patch(authenticateToken, updateNote)
.delete(authenticateToken, deleteNote);
export default router;