const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6, "Password must have at least 6 characters"],
        maxLength: [23, "Password must not exceed 23 characters"],
    },
    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://res.cloudinary.com/dapq7i8zg/image/upload/v1701907461/inventoreasy/i6viw8qtordig3c8zgup.png"
    },
    phone: {
        type: String,
        default: "+52"
    },
    bio: {
        type: String,
        maxLength: [250, "Bio must not exceed 250 characters"],
        default: "lorem ipsum"
    }
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)
module.exports = User