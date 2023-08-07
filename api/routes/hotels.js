import express from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);

//UPDATE
router.put('/:id', verifyAdmin, updateHotel);

//DELETE
router.delete('/:id', verifyAdmin, deleteHotel);

//GET
router.get('/find/:id', getHotel);

//GET ALL
router.get('/', getAllHotel);

//COUNT BY CITY
router.get('/countByCity', countByCity);

//COUNT BY TYPE
router.get('/countByType', countByType);

export default router;
