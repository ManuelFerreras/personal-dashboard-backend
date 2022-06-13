import { Prop } from "@nestjs/mongoose";

export class CreateInvestmentDTO {
  readonly id: number;
  readonly amount: number;
  readonly returned_amount: number;
  readonly title: string;
  readonly description: string;
  readonly createdBy: string;
  readonly generation_date_time: string;
}
  