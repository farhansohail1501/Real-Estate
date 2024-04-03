import express from 'express';
import {createUser} from '../controllers/userController.js';
import {bookVisit} from '../controllers/userController.js';
import {allBookings} from '../controllers/userController.js';
import {cancelBooking} from '../controllers/userController.js';
import {favoriteResidency} from '../controllers/userController.js';
import {getAllFavorites} from '../controllers/userController.js';


const router = express.Router();

router.post('/register', createUser);
router.post("/bookVisit/:id", bookVisit);
router.post('/allBookings', allBookings);
router.post('/removeBooking/:id', cancelBooking);
router.post('/toFavourites/:rid', favoriteResidency);
router.post('/favourites', getAllFavorites);

export {router as userRoute}