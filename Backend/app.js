import express from 'express';
import cors from 'cors';
import indexRouter from './src/router/index.router.js';
import errorHandler from './src/middlewares/errorHandler.middleware.js';

// create an instance of express 
const app = express();

// use cors and express.json
app.use(cors());
app.use(express.json());

// create a route
app.use("/api", indexRouter )

// error handler middleware
app.use(errorHandler);

// listen to the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


