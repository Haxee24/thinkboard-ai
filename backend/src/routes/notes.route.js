import {Router} from 'express';
import { getAllNotes } from '../controllers/notes.controller.js';

const router = Router();

router.route('/').get(getAllNotes);

export default router;