import {Router} from 'express';
import { getAllNotes, createNote, deleteNote } from '../controllers/notes.controller.js';
import authenticateToken from '../middleware/auth.middleware.js';

const router = Router();

router.route('/').get(authenticateToken, getAllNotes).post(authenticateToken, createNote);
router.route('/:id').delete(authenticateToken, deleteNote);
export default router;