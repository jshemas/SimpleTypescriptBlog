import express from 'express';
import { listPosts } from '../controllers/post.controller';

const router = express.Router();

router.get('/', listPosts);

export default router;
