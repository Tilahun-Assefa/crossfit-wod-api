// In src/v1/routes/workoutRoutes.js
const express = require("express");
const apicache = require("apicache");

const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const memberController = require("../../controllers/memberController");


const router = express.Router();
const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
//GET request (http://localhost:3001/api/v1/workouts) 
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

//GET request (http://localhost:3001/api/v1/workouts/:id) 
router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.get("/members/:memberId", memberController.getMemberForRecord)

//POST request to localhost:3001/api/v1/workouts
router.post("/", workoutController.createNewWorkout);

//Patch request to localhost:3001/api/v1/workouts/:id
router.patch("/:workoutId", workoutController.updateOneWorkout);

//Delete request to localhost:3001/api/v1/workouts/:id
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;