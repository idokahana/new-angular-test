import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import AppError from "../errors/app-error";

export default function paramsValidation(validator: ObjectSchema) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      req.params = await validator.validateAsync(req.params);
      next();
    } catch (e) {
      next(new AppError(422, e.message));
    }
  };
}
