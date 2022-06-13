import { Module } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { InvestmentController } from './investment.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { InvestmentSchema } from "src/schemas/investment.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Investment", schema: InvestmentSchema }]),
  ],
  providers: [InvestmentService],
  controllers: [InvestmentController]
})
export class InvestmentModule {}
