// Middleware de manejo de errores
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Loguea el error para depuración
    res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
    });
};

export default errorHandler;
