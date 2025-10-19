import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        minlength: 2,
        maxlength: 50,

    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+\.\S+/,'Please enter a valid email address'],
    },
    password: {
         type: String,
        required: [true, 'password is required'],
        minlength: 5,
    }
},
    {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;