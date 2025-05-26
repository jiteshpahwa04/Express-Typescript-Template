import express from "express";
import {
  createHotelHandler,
  getHotelByIdHanlder,
} from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../validator";
import { hotelSchema } from "../../validator/hotel.validator";

const hotelRouter = express.Router();

hotelRouter.post("/", validateRequestBody(hotelSchema), createHotelHandler);
hotelRouter.get("/:id", getHotelByIdHanlder);

export default hotelRouter;
