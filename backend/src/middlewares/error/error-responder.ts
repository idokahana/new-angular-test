import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";

export default function errorResponder(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    res.status(err.status).send(err.message);
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
  }
}
