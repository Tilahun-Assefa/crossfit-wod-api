// In src/index.js 
const express = require("express");

//import router module
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// For testing purposes using baseURL and router(http://localhost:3000/api/v1/workouts) 
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});