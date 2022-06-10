import { Module } from '@nestjs/common';
import { MoneyEntryService } from './money-entry.service';
import { MoneyEntryController } from './money-entry.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { MoneyEntrySchema } from "src/schemas/money_entry.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "MoneyEntry", schema: MoneyEntrySchema }]),
  ],
  providers: [MoneyEntryService],
  controllers: [MoneyEntryController]
})
export class MoneyEntryModule {}
