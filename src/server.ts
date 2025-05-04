import express from "express";
import { Express } from "express";
import {serverConfig} from "./config";

const app: Express = express();

const PORT = serverConfig.PORT;

app.get('/ping', (req, res)=>{
    res.send("Pong");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});