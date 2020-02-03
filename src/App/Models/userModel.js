const mongoose = require("../../Config/database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
});

UserSchema.pre("save", async function(next){

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;