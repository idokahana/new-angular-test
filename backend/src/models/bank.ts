import mongoose from "../db/mongoose";
import { OperationType } from "../enum/enum";

export interface AccountOperation {
  id: string;
  accountNumber: string;
  type: string;
  data: {
    amount: number;
    date: Date;
    interestRate?: number;
    numOfPayments?: number;
    loanDate?: Date;
  };
}

const accountOperationSchema = new mongoose.Schema<AccountOperation>(
  {
    accountNumber: String,
    type: {
      type: String,
      enum: Object.values(OperationType),
      required: true,
    },
    data: mongoose.Schema.Types.Mixed,
  },
  {
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const AccountOperationModel = mongoose.model<AccountOperation>(
  "AccountOperation",
  accountOperationSchema,
  "accountOperations"
);
