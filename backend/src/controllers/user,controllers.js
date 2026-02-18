import User from "../models/user.models.js";

export const registerUser = async (req, res) => {
    try {
        const {fullname, username, email, password} = req.body;
        if (!fullname || !username || !email || !password){
            return res.status(400).json({message: "Please enter all fields"});
        }
        const existingUser = await User.findOne({$or: [{email}, {username}] });
        if (existingUser){
            return res.status(400).json({message: "User with the same email or username already exists"});
        }
        const newUser = await User.create({
            fullname,
            username,
            email,
            password
        });
        return res.status(201).json({message: "User registered successfully"});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}