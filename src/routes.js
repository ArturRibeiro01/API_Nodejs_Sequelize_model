const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    Greedings : 'Hello World',
  });
})


module.exports = router;
