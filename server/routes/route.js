import express from 'express';
import {
  login,
  register,
  donate,
  hotels,
  removeHotel,
  ngoHotel,
  getNgoHotel,
  sendMail,
} from '../controller/user-controller.js';

const router = express.Router();

router.post('/ngo/login', login);
router.post('/ngo/register', register);
router.post('/hotel/donate', donate);
router.get('/hotels', hotels);
router.delete('/hotels/:id', removeHotel);
router.post('/ngo/hotel/:id1/:id2', ngoHotel);
router.get('/ngo/hotel', getNgoHotel);
router.post('/send-mail/:id1/:id2',sendMail);

export default router;
