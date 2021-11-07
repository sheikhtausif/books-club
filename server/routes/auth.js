import express from "express";
const router = express.Router();
import {
    registerUser,
    authenticateUser,
    authenticate,
    resetPassword,
    // resetPasswordToken,
    resetPasswordNow,
} from "../controllers/auth";

import {
    RegisterValidations,
    AuthenticateValidations,
    ResetPassword,
} from "../validators";

import Validator from "../middlewares/validator-middleware";
import { userAuth } from "../middlewares/auth-guard";

router.route("/register").post(RegisterValidations, Validator, registerUser);

router
    .route("/authenticate")
    .post(AuthenticateValidations, Validator, authenticateUser)
    .get(userAuth, authenticate);

router.route("/reset-password").put(ResetPassword, Validator, resetPassword);
router.route("/resetPasswordNow").post(resetPasswordNow);

export default router;
