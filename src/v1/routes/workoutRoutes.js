// In src/v1/routes/workoutRoutes.js
const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

//GET request (http://localhost:3000/api/v1/workouts) 
router.get("/", workoutController.getAllWorkouts);

//GET request (http://localhost:3000/api/v1/workouts/:id) 
router.get("/:workoutId", workoutController.getOneWorkout);

//POST request to localhost:3000/api/v1/workouts
router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;