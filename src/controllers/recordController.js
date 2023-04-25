// In src/controllers/workoutController.js
const recordService = require("../services/recordService");

/*********************************************************** */
const getRecordForWorkout = (req, res) => {
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
        const record = recordService.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: record });
    } catch (er) {
        res.status(er.status || 500).send({ status: "Failed", data: { error: er.message || er } });
    }
};

module.exports = {
    getRecordForWorkout
};