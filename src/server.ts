import express from "express";
import { Express } from "express";
import {serverConfig} from "./config";
import v1Router from "./routers/v1";
import v2Router from "./routers/v2";

const app: Express = express();

const PORT = serverConfig.PORT;

// Registering all the routers and their corresponding routes with our app server object
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});