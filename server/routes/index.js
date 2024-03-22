const router = require('express').Router();

const carRoutes = require("./cars.routes")
router.use("/cars", carRoutes)

module.exports = router; 