import express from 'express';
import { getAccessToken, stkPush } from '../controllers/paymentController.js';

const router = express.Router();

router.get("/token",  getAccessToken);
router.post("/stkpush", stkPush);

export default router;