import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  id: number;

  @Prop()
  createdBy: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  done: boolean;

  @Prop()
  generation_date_time: Date;

}

export const TodoSchema =
  SchemaFactory.createForClass(Todo);
 
