import { Router } from "express";

import getAllBankAction, { createAction } from "../controllers/bank/controller";
import {
  actionParamsValidator,
  newActionParamsValidator,
  // newActionValidator,
} from "../controllers/bank/validator";
import paramsValidation from "../middlewares/params-validation";
import validation from "../middlewares/validation";

const bankRouter = Router();

bankRouter.get(
  "/actions/:accountNumber",
  paramsValidation(actionParamsValidator),
  getAllBankAction
);

bankRouter.post(
  "/actions/:accountNumber/:type",
  // validation(newActionValidator),
  paramsValidation(newActionParamsValidator),
  createAction
);

export default bankRouter;
