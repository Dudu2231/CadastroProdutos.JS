const { constants } = require("../constants");

const errorHandler = (error, req, res, next) => {
    console.log("Error:", error.message);
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({ title: "Validation Failed", message: error.message, stackTrace: error.stack });
            break;
        case constants.UNAUHAUTORIZED:
            res.status(statusCode).json({ title: "Unauthorized", message: error.message, stackTrace: error.stack });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({ title: "Not Found", message: error.message, stackTrace: error.stack });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({ title: "Forbidden", message: error.message, stackTrace: error.stack });
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({ title: "Server Error", message: error.message, stackTrace: error.stack });
            break;
        default:
            console.log("No errors to be handled");
    }
};

module.exports = errorHandler;
