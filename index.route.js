const express = require('express');
const mathRoutes = require('./server/math/math.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);


// mount math routes at /math
router.use('/math', mathRoutes);


module.exports = router;
