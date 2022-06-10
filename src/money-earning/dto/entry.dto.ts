import { Prop } from "@nestjs/mongoose";

export class CreateEarningDTO {
  readonly id: number;
  readonly amount: number;
  readonly description: string;
  readonly createdBy: string;
  readonly generation_date_time: string;
}
 