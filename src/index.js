// In src/index.js 
const express = require("express");
const bodyParser = require("body-parser");

//import router module
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3001;

//middlewares to process request and responses

//parse json request
app.use(bodyParser.json());

// For testing purposes using baseURL and router(http://localhost:3001/api/v1/workouts) 
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});