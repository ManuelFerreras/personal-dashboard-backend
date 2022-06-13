import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type InvestmentDocument = Investment & Document;

@Schema()
export class Investment {
  @Prop()
  id: number;

  @Prop()
  amount: number;
  
  @Prop()
  returned_amount: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  createdBy: string;

  @Prop()
  generation_date_time: Date;

}

export const InvestmentSchema =
  SchemaFactory.createForClass(Investment);
 
