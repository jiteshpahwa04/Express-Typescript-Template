import express from 'express';
import { pingHandler } from "../../controllers/ping.controller";

const pingRouter = express.Router();

pingRouter.get("/", pingHandler);
// Also possible: pingRouter.get("/ping", [middleware1, middleware2], pingHandler);

pingRouter.get("/health", (req, res)=>{
  res.status(200).send("OK");
})

export default pingRouter;