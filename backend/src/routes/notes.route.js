import {Router} from 'express';

const router = Router();

router.route('/').get((_, res) => {
    res.send("SERVING NOTES");
});

export default router;