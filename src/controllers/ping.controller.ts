import { Request, Response } from "express";

export const pingHandler = async(req: Request, res: Response): Promise<void> => {
  console.log("request body: ", req.body);
  console.log("query params: ", req.query);
  console.log("request params: ", req.params);
  res.status(200).json({
    success: true,
    message: "PONG"
  })
};