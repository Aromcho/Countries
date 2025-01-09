import express from 'express';
import countriesRouter from './api/contries.routes.js';
import countryRouter from './api/country.routes.js';
const indexRouter = express.Router();

// Define routes
indexRouter.use('/countries', countriesRouter);
indexRouter.use('/country', countryRouter);

export default indexRouter;
