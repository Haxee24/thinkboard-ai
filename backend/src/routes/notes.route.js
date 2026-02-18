import {Router} from 'express';
import { getAllNotes, createNote } from '../controllers/notes.controller.js';

const router = Router();

router.route('/').get(getAllNotes).post(createNote);

export default router;