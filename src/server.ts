import express from "express";
import { Express } from "express";
import {serverConfig} from "./config";
import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";
import logger from "./config/logger.config";
import { attachCorrelationMiddleWare } from "./middlewares/correlation.middleware";
import sequelize from "./db/models/sequelize";
import Hotel from "./db/models/hotel";

const app: Express = express();

const PORT = serverConfig.PORT;

app.use(express.json());

app.use(attachCorrelationMiddleWare);
// Registering all the routers and their corresponding routes with our app server object
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

// Error handler middleware
app.use(genericErrorHandler);

app.listen(PORT, async ()=>{
    logger.info(`Server is running on port: ${PORT}`);

    try {
        await sequelize.authenticate();

        const hotel = await Hotel.create({
            name: 'Hotel california',
            address: '124 Street',
            location: 'LA',
            rating: 4.5,
            ratingCount: 100
        });

        logger.info(`Hotel created successfully: ${hotel.toJSON()}`)
    }catch(err) {
        logger.info("Something went wrong in the db queries");
    }
});