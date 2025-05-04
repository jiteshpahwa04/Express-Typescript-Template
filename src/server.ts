import express from "express";
import { Express } from "express";
import {serverConfig} from "./config";
import { createPingRouter } from "./routers/ping.router";

const app: Express = express();

const PORT = serverConfig.PORT;

createPingRouter(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});