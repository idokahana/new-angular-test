import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";

export default function notFound(
  req: Request,
  res: Response,
  next: NextFunction
) {
  next(new AppError(404, "page not found"));
}
