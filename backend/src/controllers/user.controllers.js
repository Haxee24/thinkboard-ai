import User from "../models/user.models.js";

const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
}

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
        return res.status(201).json({user: newUser, message: "User registered successfully"});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

const generateTokens = async (user) => {
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save();
    return {accessToken, refreshToken};
}

export const loginUser = async (req, res) => {
    try{
        const {userid, password} = req.body;
        if (!userid || !password){
            return res.status(400).json({message: "Please enter all fields"});
        }
        const user = await User.findOne({$or: [{email: userid}, {username: userid}]}).select("+password +refreshToken");
        if (!user){
            return res.status(401).json({message: "Invalid email"});
        };
        const isMatch = await user.comparePassword(password);
        if (!isMatch){
            return res.status(401).json({message: "Invalid password"});
        }
        const {accessToken, refreshToken} = await generateTokens(user);
        user.password = undefined;
        user.refreshToken = undefined;
        res.cookie("refreshToken", refreshToken, options);
        res.cookie("accessToken", accessToken, options);
        return res.status(200).json({user, message: "Login successful"});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}