// In src/database/Workout.js
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

//add the new object to json database and return the new added object
const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

module.exports = { getAllWorkouts, createNewWorkout };