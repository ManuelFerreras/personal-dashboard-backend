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
 
}
