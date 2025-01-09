import express from 'express';
import { getCountryInfo } from '../../controllers/country.controller.js'

const countryRouter = express.Router();

// Endpoint para obtener información detallada del país
countryRouter.get('/:countryCode', getCountryInfo);

export default countryRouter;
