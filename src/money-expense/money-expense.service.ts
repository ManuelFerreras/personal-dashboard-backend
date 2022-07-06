import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MoneyExpense, MoneyExpenseDocument } from "src/schemas/money_expense.schema";
import { Model } from "mongoose";

@Injectable()
export class MoneyExpenseService {
    constructor(
        @InjectModel("MoneyExpense") private readonly moneyExpenseModel: Model<MoneyExpenseDocument>,
    ) {}

    async getEntriesForMonth(req: any, from, to) {
        return await this.moneyExpenseModel.find({ createdBy: req.user.userId, generation_date_time: {$gte:new Date(from), $lt:new Date(to)} });
    }
 
    async createNewExpense(req: any, amount: string, description: string) {

        const expense = {
            userId: req.user.userId,
            amount: amount,
            description: description,
            createdBy: req.user.userId,
            generation_date_time: new Date(),
        }

        return await new this.moneyExpenseModel(expense).save();

    }

    async getAllEntries(req: any) {

        return await this.moneyExpenseModel.find({ createdBy: req.user.userId });

    }

    async deleteExpense(req: any, id: string) {

        const expense = this.moneyExpenseModel.findOneAndDelete({ _id: id });

        return await this.moneyExpenseModel.deleteOne({ _id: id, createdBy: req.user.userId });

    }

}
