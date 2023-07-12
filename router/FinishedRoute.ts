import express,{ Router } from "express";
import { CreateTask, DeleteTask, UpdateTask, getOneTask, getTask } from "../controller/FinishedController";


const router = Router();
router.route("/")
.get(getTask)

router.route("/crt")
.post(CreateTask)

router.route("/:id")
.get(getOneTask)
.patch(UpdateTask)
.delete(DeleteTask)

export default router