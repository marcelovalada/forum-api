import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  helloUse(): string {
    return 'Hello User!';
  }
}
