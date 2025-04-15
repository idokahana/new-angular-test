import { NextFunction, Request, Response } from "express";

import { OperationType } from "../../enum/enum";
import { AccountOperationModel } from "../../models/bank";

export default async function getAllBankAction(
  req: Request<{ accountNumber: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const accountNumber = req.params.accountNumber;
    const actions = await AccountOperationModel.find({ accountNumber });
    const onlyData = actions.map((action) => action.data);
    res.json(onlyData);
  } catch (e) {
    next(e);
  }
}

export async function createAction(
  req: Request<{ accountNumber: string; type: OperationType }, {}, {}>,
  res: Response,
  next: NextFunction
) {
  try {
    const { accountNumber, type } = req.params;

    const bankAction = new AccountOperationModel({
      accountNumber,
      type,
      data: req.body,
    });

    await bankAction.save();
    res.json(bankAction.toObject());
  } catch (e) {
    next(e);
  }
}
