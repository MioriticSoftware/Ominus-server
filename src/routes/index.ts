import express from 'express';
import rootRoutes from './root';

const router = express.Router();

router.use('/', rootRoutes);

export default router;
