import { Router } from "express";
import {User} from "../database/models/User.model.js";
import { successResponse } from "../response_handler/response.js";

const router = Router();

router.get("/", (req, res, next) => {
  try {
    throw new Error("something went wrong");
  } catch (error) {
    // console.log(error)
    next(error);
  }
  // res.json({data:"Hello from user"});
});

router.post("/", async (req, res, next) => {
  try {
    console.log('hy')
    const { userName, email } = req.body;
    console.log({ userName, email })
    const response = await User.create({ userName, email });
    successResponse(res, response, "user created", 201);
  } catch (error) {
    next(error);
  }
});

export default router;
