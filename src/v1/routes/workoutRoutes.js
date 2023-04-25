// In src/v1/routes/workoutRoutes.js
const express = require("express");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();

//GET request (http://localhost:3001/api/v1/workouts) 
router.get("/", workoutController.getAllWorkouts);

//GET request (http://localhost:3001/api/v1/workouts/:id) 
router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.get("/members/:memberId", recordController.getRecordForWorkout)

//POST request to localhost:3001/api/v1/workouts
router.post("/", workoutController.createNewWorkout);

//Patch request to localhost:3001/api/v1/workouts/:id
router.patch("/:workoutId", workoutController.updateOneWorkout);

//Delete request to localhost:3001/api/v1/workouts/:id
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;