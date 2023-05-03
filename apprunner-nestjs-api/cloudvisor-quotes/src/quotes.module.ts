import { Module } from '@nestjs/common';
import { AppController } from './quotes.controller';
import { AppService } from './quotes.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
