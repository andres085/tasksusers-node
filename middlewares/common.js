const { validationResult } = require('express-validator');

const validResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }
    next();
}

module.exports = {
    validationResult: validResult
}