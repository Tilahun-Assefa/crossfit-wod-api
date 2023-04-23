// In src/controllers/workoutController.js
const workoutService = require("../services/workoutService");

/*********************************************************** */
const getAllWorkouts = (req, res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({ status: "OK", data: allWorkouts });
    } catch (er) {
        res.status(er.status || 500).send({ status: "Failed", data: { error: er.message || er } });
    }
};

/*********************************************************** */
const getOneWorkout = (req, res) => {
    const { params: { workoutId } } = req;
    if (!workoutId) {
        res.status(400).send({
            status: "Failed",
            data: {
                error: "Parameter ':workoutId' can not be empty"
            }
        });
    }

    try {
        const workout = workoutService.getOneWorkout(workoutId);
        res.send({ status: "OK", data: workout });
    } catch (er) {
        res.status(er.status || 500)
            .send({ status: "Failed", data: { error: er.message || er } });
    }
};

/*********************************************************** */
const createNewWorkout = (req, res) => {
    const { body } = req;
    //validating the request body property
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        res.status(400).send({
            status: "Failed",
            data: {
                error: "one of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercise', 'trainerTips'"
            }
        });
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    try {
        const createdWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({ status: "OK", data: createdWorkout });
    } catch (er) {
        res.status(er.status || 500)
            .send({ status: "Failed", data: { error: er.message || er } });
    }
};

/*********************************************************** */
const updateOneWorkout = (req, res) => {
    const { body, params: { workoutId } } = req;

    if (!workoutId) {
        res.status(400).send({
            status: "Failed",
            data: {
                error: "Parameter ':workoutId' can not be empty"
            }
        });
    }

    try {
        const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
        res.send({ status: "OK", data: updatedWorkout });
    } catch (er) {
        res.status(er.status || 500)
            .send({ status: "Failed", data: { error: er.message || er } });
    }
};

/*********************************************************** */
const deleteOneWorkout = (req, res) => {
    const { params: { workoutId } } = req;
    if (!workoutId) {
        res.status(400).send({
            status: "Failed",
            data: {
                error: "Parameter ':workoutId' can not be empty"
            }
        });
    }

    try {
        workoutService.deleteOneWorkout(workoutId);
        res.status(204).send({ status: "OK" });
    } catch (er) {
        res.status(er.status || 500)
            .send({ status: "Failed", data: { error: er.message || er } });
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};