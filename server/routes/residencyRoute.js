import express from 'express';
const router = express.Router();
import {createResidency} from '../controllers/residencyController.js';
import {getResidencies} from '../controllers/residencyController.js';
import {getResidency} from '../controllers/residencyController.js';

router.post('/create', createResidency);
router.get('/allresidencies', getResidencies);
router.get('/:id', getResidency);

export {router as residencyRoute}