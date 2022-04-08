const { check } = require('express-validator');
const { validationResult } = require('../common');

const validTitle = check('title').notEmpty().withMessage('Title cant be null');



const postTaskRequestValidation = [
    validTitle,
    validationResult
];

const updateTaskRequestValidation = [
    validTitle,
    validationResult
];

module.exports = {postTaskRequestValidation, updateTaskRequestValidation};