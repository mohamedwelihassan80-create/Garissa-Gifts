import express from 'express';
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  getUnreadCount
} from '../controllers/notificationController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, adminOnly, getNotifications);
router.get('/unread-count', protect, adminOnly, getUnreadCount);
router.put('/read-all', protect, adminOnly, markAllAsRead);
router.put('/:id/read', protect, adminOnly, markAsRead);

export default router;