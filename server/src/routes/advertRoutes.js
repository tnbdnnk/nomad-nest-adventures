import express from 'express';
import { getAdverts, getAdvertById } from '../controllers/advertControllers.js';

const router = express.Router();

router.route('/').get(getAdverts);
router.route('/:id').get(getAdvertById);

export default router;