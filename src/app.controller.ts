import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
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

  @Get('health')
  checkHealth(): string {
    console.log('healthy check route');
    return 'healthy wealthy';
  }
}
