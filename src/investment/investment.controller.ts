import { Controller, Get, UseGuards, Request, Post, Param, Query } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('investment')
export class InvestmentController {
    constructor (
        private readonly investmentService: InvestmentService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('newInvestment')
    async newInvestment(
        @Request() req,
        @Query('amount') amount: string,
        @Query('returned_amount') returned_amount: string,
        @Query('title') title: string,
        @Query('description') description: string,
    ) {

        console.log("Adding new Investment.");
        
        await this.investmentService.createNewInvestment(req, amount, returned_amount, title, description);

        console.log('Succesfully added a new investment.');

        return 'Succesfully added a new investment.';

    } 

    @UseGuards(JwtAuthGuard)
    @Post('delInvestment')
    async delInvestment(
        @Request() req,
        @Query('id') id: string,
    ) {

        console.log("Deleting Investment ", id);

        await this.investmentService.deleteInvestment(req, id);

        return 'succesfully deleted the investment.';

    } 

    @UseGuards(JwtAuthGuard)
    @Get('getInvestments')
    async getEntries(
        @Request() req,
    ) {
        
        console.log("Getting Investments.");
        
        return await this.investmentService.getAllEntries(req);
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('getInvestmentsForMonth')
    async getEntriesForMonth(
        @Request() req,
        @Query('from') from: string,
        @Query('to') to: string,
    ) {
        
        console.log("Getting Investments.");
        
        return await this.investmentService.getEntriesForMonth(req, from, to);
    }
    
    @UseGuards(JwtAuthGuard)
    @Post('addReturnedAmount')
    async addReturnedAmount(
        @Request() req,
        @Query('id') id: string,
        @Query('amount') amount: string,
    ) {
    
        console.log("Adding ", amount, " to returned Amount to Investment ", id);
        
        return await this.investmentService.addReturnedAmount(req, id, amount);
    }
}
