import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MoneyEarningDocument = MoneyEarning & Document;

@Schema()
export class MoneyEarning {
  @Prop()
  id: number;

  @Prop()
  amount: number;

  @Prop()
  description: string;

  @Prop()
  createdBy: string;

  @Prop()
  generation_date_time: Date;

}

export const MoneyEarningSchema =
  SchemaFactory.createForClass(MoneyEarning);
 
