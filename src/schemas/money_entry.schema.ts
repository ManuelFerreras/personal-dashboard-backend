import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MoneyEntryDocument = MoneyEntry & Document;

@Schema()
export class MoneyEntry {
  @Prop()
  id: number;

  @Prop()
  amount: number;

  @Prop()
  description: string;

  @Prop()
  generation_date_time: Date;

}

export const MoneyEntrySchema =
  SchemaFactory.createForClass(MoneyEntry);
 
