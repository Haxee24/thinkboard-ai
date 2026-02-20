import {Router} from 'express';
import { getAllNotes, createNote } from '../controllers/notes.controller.js';
import authenticateToken from '../middleware/auth.middleware.js';

const router = Router();

router.route('/').get(authenticateToken, getAllNotes).post(authenticateToken, createNote);

export default router;