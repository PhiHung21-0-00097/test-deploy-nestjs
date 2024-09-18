import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/users/dto/create-user';
import { UserService } from 'src/modules/users/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.loginUser(createUserDto);
  }
}
