const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Property = require('../models/Property');

// Post a property
router.post('/', [
  auth,
  [
    check('place', 'Place is required').not().isEmpty(),
    check('area', 'Area is required').isNumeric(),
    check('bedrooms', 'Number of bedrooms is required').isNumeric(),
    check('bathrooms', 'Number of bathrooms is required').isNumeric(),
    check('nearby', 'Nearby locations are required').not().isEmpty(),
  ],
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { place, area, bedrooms, bathrooms, nearby } = req.body;

  try {
    const newProperty = new Property({
      owner: req.user.id,
      place,
      area,
      bedrooms,
      bathrooms,
      nearby,
    });

    const property = await newProperty.save();
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Other property routes: get properties, update, delete...

module.exports = router;
