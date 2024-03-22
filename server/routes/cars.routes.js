const router = require("express").Router();

const Car = require("../models/Car.model");

// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const { verifyToken } = require("../middlewares/verifyToken")

router.get("/getAllCars", (req, res, next) => {
  Car
    .find()
    .sort({ brand: 1 })
    .then(response => setTimeout(() => res.json(response), 1000))
    .catch(err => next(err))
});

router.get("/getOneCar/:car_id", (req, res, next) => {
  const { car_id } = req.params

  Car
    .findById(car_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getCarByOwner', (req, res, next) => {


  Car
    .find({ owner })
    .sort({ brand: 1 })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.post("/saveCar", (req, res, next) => {

  const { brand, model, year, images, description, price, contact, phone, email } = req.body

  Car
    .create({ brand, model, year, images, description, price, contact, phone, email })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put("/editCar/:car_id", (req, res, next) => {

  const { car_id } = req.params
  const { brand, model, year, images, description, price, contact, phone, email } = req.body

  Car
    .findByIdAndUpdate(car_id, { brand, model, year, images, description, price, contact, phone, email })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete("/deleteCar/:car_id", (req, res, next) => {
  const { car_id } = req.params

  Car
    .findByIdAndDelete(car_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;