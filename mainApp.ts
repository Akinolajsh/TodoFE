import express, { Application } from "express";
import cors from "cors";
import task from "./router/taskRouter";
import done from "./router/doneTaskRouter";
import auth from "./router/authRouter";
import finished from "./router/FinishedRoute";

export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use("/api/v1/task", task)
    .use("/api/v1/done", done)
    .use("/api/v1/auth", auth)
    .use("/api/v3/finished", finished);
};
