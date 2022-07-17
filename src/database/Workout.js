// In src/database/Workout.js
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

//return all workouts from database
const getAllWorkouts = () => {
    try {
        return DB.workouts;

    } catch (error) {

    }
};

//return only one workout from the database
const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        return;
    }
    return workout;
};


//add the new object to json database and return the new added object
const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Workout with the name '${newWorkout.name}' already exists`
        };
    }
    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch (error) {
        throw {
            status: 500,
            message: error.message || error
        };
    }
};

//update one workout in db
const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdate = DB.workouts.findIndex(
        (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
        return;
    }
    //spread operator merge the changes and return the updated object
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDeletion === -1) {
        return;
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout };