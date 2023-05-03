import { Controller, Get } from '@nestjs/common';
import { AppService } from './quotes.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRandomQuote(): { quote: string } {
    return this.appService.getRandomQuote();
  }
}
