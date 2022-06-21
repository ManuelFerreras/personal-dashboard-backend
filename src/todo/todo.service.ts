import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from "src/schemas/todo.schema";
import { Model } from "mongoose";

@Injectable()
export class TodoService {
    constructor(
        @InjectModel("Todo") private readonly todoModel: Model<TodoDocument>,
    ) {}

    async getTodosForMonth(req: any, from, to) {
        return await this.todoModel.find({ createdBy: req.user.userId, generation_date_time: {$gte:new Date(from), $lt:new Date(to)} });
    }
 
    async createNewTodo(req: any, title: string, description: string) {

        const todo = {
            userId: req.user.userId,
            createdBy: req.user.userId,
            title: title,
            description: description,
            done: false,
            generation_date_time: new Date(),
        }

        return await new this.todoModel(todo).save();

    }

    async getAllTodos(req: any) {

        return await this.todoModel.find({ userId: req.user.userId });

    }

    async deleteTodo(req: any, id: string) {

        return await this.todoModel.deleteOne({ _id: id, createdBy: req.user.userId });

    }

    async setTodoDone(req: any, id: string, done: boolean) {

        return await this.todoModel.updateOne({ _id: id, createdBy: req.user.userId }, { done: done });

    }

}
