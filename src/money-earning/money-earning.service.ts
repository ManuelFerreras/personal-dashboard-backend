import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MoneyEarning, MoneyEarningDocument } from "src/schemas/money_earning.schema";
import { Model } from "mongoose";

@Injectable()
export class MoneyEarningService {
    constructor(
        @InjectModel("MoneyEarning") private readonly moneyEarningModel: Model<MoneyEarningDocument>,
    ) {}
 
    async createNewEarning(req: any, amount: string, description: string) {

        const earning = {
            userId: req.user.userId,
            amount: amount,
            description: description,
            createdBy: req.user.userId,
            generation_date_time: new Date(),
        }

        return await new this.moneyEarningModel(earning).save();

    }

    async getAllEntries(req: any) {

        return await this.moneyEarningModel.find({ userId: req.user.userId });

    }

    async deleteEarning(req: any, id: string) {

        const earning = this.moneyEarningModel.findOne({ _id: id });
        console.log(earning);
        
        return await this.moneyEarningModel.deleteOne({ _id: id, createdBy: req.user.userId });

    }

}
