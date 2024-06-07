import express from 'express';
import { getAdverts, getAdvertById } from '../controllers/advertControllers';

const router = express.Router();

router.route('/').get(getAdverts);
router.route('/:id').get(getAdvertById);

export default router;