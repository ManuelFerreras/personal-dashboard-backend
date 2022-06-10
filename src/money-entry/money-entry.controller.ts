import { Controller, Get, UseGuards, Request, Post, Param, Query } from '@nestjs/common';
import { MoneyEntryService } from './money-entry.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('money-entry')
export class MoneyEntryController {
    constructor (
        private readonly moneyEntryService: MoneyEntryService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('newEntry')
    async newEntry(
        @Request() req,
        @Query('amount') amount: string,
        @Query('description') description: string,
    ) {

        await this.moneyEntryService.createNewEntry(req, amount, description);

        return 'succesfully added a new earning.';

    } 

    @UseGuards(JwtAuthGuard)
    @Get('getEntries')
    async getEntries(
        @Request() req,
    ) {
        return await this.moneyEntryService.getAllEntries(req);
    }

}
