import express from 'express';
const router = express.Router();

import { userAuth, authorize } from '../middlewares/auth-guard';
import { advancedResults } from '../middlewares/advancedResults';
import { User } from '../models';

import {
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/user';

router
    .route('/')
    .get(userAuth, authorize('admin'), advancedResults(User), getUsers);

router.route('/profile').put(userAuth, authorize('user'), updateUserProfile);
router
    .route('/:id')
    .delete(authorize('user'), deleteUser)
    .get(getUserById)
    .put(authorize('user'), updateUser);

export default router;
