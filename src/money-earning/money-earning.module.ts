import { Module } from '@nestjs/common';
import { MoneyEarningService } from './money-earning.service';
import { MoneyEarningController } from './money-earning.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { MoneyEarningSchema } from "src/schemas/money_earning.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "MoneyEarning", schema: MoneyEarningSchema }]),
  ],
  providers: [MoneyEarningService],
  controllers: [MoneyEarningController]
})
export class MoneyEarningModule {}
