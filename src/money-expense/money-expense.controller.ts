import { Controller, Get, UseGuards, Request, Post, Param, Query } from '@nestjs/common';
import { MoneyExpenseService } from './money-expense.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('money-expense')
export class MoneyExpenseController {
    constructor (
        private readonly moneyExpenseService: MoneyExpenseService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('newExpense')
    async newExpense(
        @Request() req,
        @Query('amount') amount: string,
        @Query('description') description: string,
    ) {

        await this.moneyExpenseService.createNewExpense(req, amount, description);

        return 'succesfully added a new expense.';

    } 

    @UseGuards(JwtAuthGuard)
    @Post('delExpense')
    async delExpense(
        @Request() req,
        @Query('id') id: string,
    ) {

        await this.moneyExpenseService.deleteExpense(req, id);

        return 'succesfully deleted a new expense.';

    } 

    @UseGuards(JwtAuthGuard)
    @Get('getExpenses')
    async getEntries(
        @Request() req,
    ) {
        return await this.moneyExpenseService.getAllEntries(req);
    }
 
}
