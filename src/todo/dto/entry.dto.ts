import { Prop } from "@nestjs/mongoose";

export class CreateEarningDTO {
  readonly id: number;
  readonly createdBy: string;
  readonly title: string;
  readonly description: string;
  readonly done: boolean;
  readonly generation_date_time: string;
}
 