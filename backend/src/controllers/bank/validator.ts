import Joi from "joi";

export const newActionValidator = Joi.object({
  accountNumber: Joi.string().length(4).required(),
  type: Joi.string().required(),
  amount: Joi.number().min(0).required(),
  date: Joi.date().required(),
  interestRate: Joi.number().min(0).optional(),
  numOfPayments: Joi.number().min(1).optional(),
  loanDate: Joi.date().optional(),
});

export const newActionParamsValidator = Joi.object({
  accountNumber: Joi.string().length(4).required(),
  type: Joi.string().valid("deposit", "withdrawal", "loan").required(),
});

export const actionParamsValidator = Joi.object({
  accountNumber: Joi.string().length(4).required(),
});
