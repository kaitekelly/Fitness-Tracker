const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {

    },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;