import { Prop } from "@nestjs/mongoose";

export class CreateNftDTO {
  readonly id: number;
  readonly amount: number;
  readonly description: string;
  readonly generation_date_time: string;
}
 