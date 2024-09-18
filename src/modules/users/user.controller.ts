import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.loginUser(createUserDto);
  }
}
