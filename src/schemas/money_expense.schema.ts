import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MoneyExpenseDocument = MoneyExpense & Document;

@Schema()
export class MoneyExpense {
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

export const MoneyExpenseSchema =
  SchemaFactory.createForClass(MoneyExpense);
 
