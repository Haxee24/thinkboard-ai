import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export default async function authenticateToken(req, res, next){
    const token = req.cookies?.accessToken;
    if (!token){
        return res.status(401)
        .json({message: "Access token not found"});
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401)
            .json({message: "User not found"});
        }   
        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        return res.status(403)
        .json({message: "Invalid or expired token"});
    }
};