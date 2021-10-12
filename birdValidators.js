import { body } from 'express-validator';

const birdValidators = [
    body("species").isLength({ min: 3, max: 80 }).withMessage("species-between-3-and-80-chars"),
    body("species").isAlpha('en-US', {ignore: ' '}).withMessage("species-only-letters"),
    body("notes").isLength({ max: 140 }).withMessage("notes-max-140-chars"),
    body("notes").isAlpha('en-US', {ignore: ' '}).withMessage("notes-only-letters"),
    body("estimatedAmount").isNumeric({ no_symbols: true }).withMessage("amount-only-numbers")
];

export default birdValidators;