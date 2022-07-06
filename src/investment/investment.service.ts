import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Investment, InvestmentDocument } from "src/schemas/investment.schema";
import { Model } from "mongoose";

@Injectable()
export class InvestmentService {
    constructor(
        @InjectModel("Investment") private readonly investmentModel: Model<InvestmentDocument>,
    ) {}
 
    async createNewInvestment(req: any, amount: string, returned_amount: string, title: string, description: string) {

        const investment = {
            userId: req.user.userId,
            amount: amount,
            returned_amount: returned_amount,
            title: title,
            description: description,
            createdBy: req.user.userId,
            generation_date_time: new Date(),
        }

        return await new this.investmentModel(investment).save();

    }

    async getAllEntries(req: any) {

        return await this.investmentModel.find({ createdBy: req.user.userId });

    }

    async getEntriesForMonth(req: any, from, to) {
        return await this.investmentModel.find({ createdBy: req.user.userId, generation_date_time: {$gte:new Date(from), $lt:new Date(to)} });
    }

    async deleteInvestment(req: any, id: string) {

        const investment = this.investmentModel.findOne({ _id: id });
        console.log(investment);
        
        return await this.investmentModel.deleteOne({ _id: id, createdBy: req.user.userId });

    }

    async addReturnedAmount(req: any, id: string, amount: string) {  

        const alreadyReturnedAmount = await (await this.investmentModel.findOne({ _id: id, createdBy: req.user.userId })).toObject().returned_amount;
        
        return await this.investmentModel.updateOne({ _id: id, createdBy: req.user.userId }, { returned_amount: (alreadyReturnedAmount + parseInt(amount)) });
    }

}
