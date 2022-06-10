import { Controller, Get, UseGuards, Request, Post, Param, Query } from '@nestjs/common';
import { MoneyEarningService } from './money-earning.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('money-earning')
export class MoneyEarningController {
    constructor (
        private readonly moneyEarningService: MoneyEarningService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('newEarning')
    async newEarning(
        @Request() req,
        @Query('amount') amount: string,
        @Query('description') description: string,
    ) {

        await this.moneyEarningService.createNewEarning(req, amount, description);

        return 'succesfully added a new earning.';

    } 

    @UseGuards(JwtAuthGuard)
    @Post('delEarning')
    async delEarning(
        @Request() req,
        @Query('id') id: string,
    ) {

        await this.moneyEarningService.deleteEarning(req, id);

        return 'succesfully deleted a new earning.';

    } 

    @UseGuards(JwtAuthGuard)
    @Get('getEarnings')
    async getEntries(
        @Request() req,
    ) {
        return await this.moneyEarningService.getAllEntries(req);
    }
 
}
