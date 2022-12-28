import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('main route called');
    return this.appService.getHello();
  }

  @Get('test')
  sayTest(): string {
    console.log('test route called');
    return 'Testtttttttttt! 02';
  }

  @Get('/api/health')
  checkHealth(): string {
    console.log('healthy check route');
    return 'healthy wealthy';
  }
}
