const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const authentication = require('../Middleware/authentication')
const User = require('../Models/user.model')

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY)
}

router.post('/register',
    [
        body('name', "Name can't be less than 4 characters").isLength({ min: 4 }),
        body('email', "Email should be unique").isEmail(),
        body('password', "password is too short min 3 characters").isLength({ min: 3 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user;
        try {
            user = await User.findOne({ email: req.body.email }).lean().exec()

            if (user) return res.status(400).json({ status: "failed", message: "email already exist" })

            user = await User.create(req.body)

            if (!user) return res.status(500).json({ status: "failed", message: "user already exist" })

            const token = newToken(user)

            res.status(201).json({ token, user })
        }
        catch (err) {
            return res.status(500).json({ status: "failed", message: err.message })
        }
    }
)

router.post('/login',
    [
        body('email', "Enter a valid email").isEmail(),
        body('password', "Enter valid password").exists(),

    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            let user = await User.findOne({ email: req.body.email }).exec()

            if (!user) return res.status(500).json({ status: "failed", message: "user doesn't exist" })

            const match = user.checkPassword(req.body.password)

            if (!match) return res.status(500).json({ status: "failed", message: "user doesn't exist" })

            const token = newToken(user)
            return res.status(201).json({ token })
        }
        catch (err) {
            return res.status(500).json({ status: "failed", message: err.message })
        }
    }
)

router.post('/getuser', authentication, async (req, res) => {
    console.log('req:', req.user)
    try {
        const userId = req.user._id
        const user = await User.findById(userId).select("-password")
        return res.status(200).json({ user })
    }
    catch (error) {
        // console.log(error.message)
        res.status(500).send("internal server error");
    }
})




module.exports = router