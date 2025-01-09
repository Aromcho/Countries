import express from 'express';
import { getCountries } from '../../controllers/countries.controller.js';

const countriesRouter = express.Router();

countriesRouter.get('/', getCountries);

export default countriesRouter;