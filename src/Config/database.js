const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://felipe:felipe%3C3123@nodeapi-g5cvu.mongodb.net/test?authSource=admin&replicaSet=nodeapi-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;