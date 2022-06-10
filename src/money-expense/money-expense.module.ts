import { Module } from '@nestjs/common';
import { MoneyExpenseService } from './money-expense.service';
import { MoneyExpenseController } from './money-expense.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { MoneyExpenseSchema } from "src/schemas/money_expense.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "MoneyExpense", schema: MoneyExpenseSchema }]),
  ],
  providers: [MoneyExpenseService],
  controllers: [MoneyExpenseController]
})
export class MoneyExpenseModule {}
