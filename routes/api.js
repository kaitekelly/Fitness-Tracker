const app = require("express").app();
const Workout = require("../models/exercise.js");

app.post("/api/exercise", ({body}, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

app.post("/api/exercise/bulk", ({ body }, res) => {
    Workout.insertMany(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

app.get("/api/exercise", (req, res) => {
    Workout.find({})
    .sort({ date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = app;