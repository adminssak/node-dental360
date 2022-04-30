import { Controller, Get, Logger, Inject, LoggerService } from '@nestjs/common';
import { AppService } from './app.service';
import { WinstonLogger } from 'nest-winston';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject(Logger) private readonly logger: LoggerService) { }

  @Get()
  getHello(): string {
    this.logger.log('Test');
    this.logger.warn('Warning');
    this.logger.error('Error');
    return this.appService.getHello();
  }
}
