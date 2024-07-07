const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(409).json({ message: 'User already exists, please login', success: false });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        // Save user to database
        await newUser.save();

          // Log user info to the console
        console.log(`New user added: ${JSON.stringify({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password 
        })}`);
        console.log('New user added successfully');

        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: newUser.email, _id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return success response
        res.status(201).json({
            message: "Signup successful",
            success: true,
            jwtToken,
            email: newUser.email,
            name: newUser.name
        });
    } catch (err) {
        // Handle errors
        console.error("Error in signup:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        //const errorMsg = 'Authentication failed, email or password is wrong';
        if (!user) {
            return res.status(403).json({ message:'Authentication failed, email is wrong', success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: 'Authentication failed, password is wrong', success: false });
        }

        // Log user info to the console
        console.log(`User logged in: ${JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password // Note: For security reasons, avoid logging passwords in production
        })}`);
        console.log('User logged in successfully');

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error("Error in login:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

module.exports = {
    signup,
    login
};
