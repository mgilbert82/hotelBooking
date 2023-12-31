import express from 'express';
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// //Token verification
// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are logged in !');
// });

// //User verification
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send(
//     'Hello user, you are logged and you can delete your account!'
//   );
// });

// //Admin check
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send(
//     'Hello admin, you are logged and you can delete all accounts!'
//   );
// });

//UPDATE
router.put('/:id', verifyUser, updateUser);

//DELETE
router.delete('/:id', verifyUser, deleteUser);

//GET
router.get('/:id', verifyUser, getUser);

//GET ALL
router.get('/', verifyAdmin, getAllUser);

export default router;
