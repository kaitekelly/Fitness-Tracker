const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {

    },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;