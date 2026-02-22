import {Router} from 'express';
import { getAllNotes, aiEnhanceNote, createNote, updateNote, deleteNote } from '../controllers/notes.controller.js';
import authenticateToken from '../middleware/auth.middleware.js';

const router = Router();

router.route('/').get(authenticateToken, getAllNotes).post(authenticateToken, createNote);
router.route('/:id')
.patch(authenticateToken, updateNote)
.delete(authenticateToken, deleteNote);
router.post('/ai-enhance', aiEnhanceNote);

export default router;