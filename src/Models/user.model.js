const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true, },
},
    { timestamps: true, versionKey: false }
);

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next()

    const hash = bcrypt.hashSync(this.password, 8)
    this.password = hash;
    next()
})

userSchema.methods.checkPassword = function (password) {
    const passwordHash = this.password
    const hash = bcrypt.compareSync(password, passwordHash)
    return hash
}

const User = model('user', userSchema)
module.exports = User
