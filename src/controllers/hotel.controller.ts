import { NextFunction, Request, Response } from "express";
import {
  createHotelService,
  getHotelByIdService,
} from "../services/hotel.service";

export const createHotelHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hotelResponse = await createHotelService(req.body);
  res.status(200).json({
    message: "Hotel created successfully",
    data: hotelResponse,
    success: true,
  });
};

export async function getHotelByIdHanlder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id));

  res.status(200).json({
    message: "Hotel found successfully",
    data: hotelResponse,
    success: true,
  });
}
