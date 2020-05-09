import * as express from 'express';
const galleryController = require('./controllers/gallery')

const router = express.Router();

router.use('/3/',  galleryController.registerRoutes())

export default router;
