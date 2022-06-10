import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MoneyEntry, MoneyEntryDocument } from "src/schemas/money_entry.schema";
import { Model } from "mongoose";

@Injectable()
export class MoneyEntryService {
    constructor(
        @InjectModel("MoneyEntry") private readonly moneyEntryModel: Model<MoneyEntryDocument>,
    ) {}
 
    async createNewEntry(req: any, amount: string, description: string) {

        const entry = {
            userId: req.user.userId,
            amount: amount,
            description: description,
            generation_date_time: new Date(),
        }

        return await new this.moneyEntryModel(entry).save();

    }

    async getAllEntries(req: any) {

        return await this.moneyEntryModel.find({ userId: req.user.userId });

    }

}
