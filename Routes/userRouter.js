import { Router } from 'express';

const router = Router();

router.get('/', (req, res,next) => {
    try {
        throw new Error()
    } catch (error) {
        next(error)
    }
    // res.json({data:"Hello from user"});
});

export default router;