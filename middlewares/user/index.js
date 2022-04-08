const { check } = require('express-validator');
const { validationResult } = require('../common');

const validUserName = check('userName').notEmpty().withMessage('Username cant be null');
const validEmail = check('email').notEmpty().withMessage('Email cant be null');
const validPassword = check('password').notEmpty().withMessage('Password cant be null');


const postUserRequestValidation = [
    validUserName,
    validEmail,
    validPassword,
    validationResult
];

const updateUserRequestValidation = [
    validUserName,
    validEmail,
    validPassword,
    validationResult
];

module.exports = {postUserRequestValidation, updateUserRequestValidation};