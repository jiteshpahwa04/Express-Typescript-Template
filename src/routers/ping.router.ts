import { Express } from "express";
import { pingHandler } from "../controllers/ping.controller";

export function createPingRouter(app: Express) {
  app.get("/ping", pingHandler);
}