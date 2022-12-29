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

  @Get('name')
  serverName(): string {
    console.log('server route');
    return 'server name is : hrms backend';
  }

  @Get('user')
  sendUser(): object[] {
    console.log(`user route`);
    const user = [
      {
        name: `John Doe`,
        age: 23,
      },
      {
        name: 'Jane Doe',
        age: 23,
      },
      {
        name: 'Biswaroop Tate',
        age: 69,
      },
    ];
    return user;
  }
}
