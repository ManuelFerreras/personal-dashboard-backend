import { Controller, Get, UseGuards, Request, Post, Param, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('todo')
export class TodoController {
    constructor (
        private readonly todoService: TodoService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('newTodo')
    async newTodo(
        @Request() req,
        @Query('title') title: string,
        @Query('description') description: string,
    ) {

        await this.todoService.createNewTodo(req, title, description);

        return 'succesfully added a new todo.';

    } 

    @UseGuards(JwtAuthGuard)
    @Post('delTodo')
    async delTodo(
        @Request() req,
        @Query('id') id: string,
    ) {

        await this.todoService.deleteTodo(req, id);

        return 'succesfully deleted a new todo.';

    } 

    @UseGuards(JwtAuthGuard)
    @Get('getTodos')
    async getTodos(
        @Request() req,
    ) {
        return await this.todoService.getAllTodos(req);
    }

    @UseGuards(JwtAuthGuard)
    @Get('getTodosForMonth')
    async getTodosForMonth(
        @Request() req,
        @Query('from') from: string,
        @Query('to') to: string,
    ) {
        
        console.log("Getting Todos.");
        
        return await this.todoService.getTodosForMonth(req, from, to);
    }
    
    @UseGuards(JwtAuthGuard)
    @Post('setTodoDone')
    async setTodoDone(
        @Request() req,
        @Query('id') id: string,
        @Query('done') done: boolean,
    ) {
        
        console.log("Setting Todo Done.");
        return await this.todoService.setTodoDone(req, id, done);

    }
 
}
