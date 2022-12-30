import { Body, Controller, Post } from '@nestjs/common/decorators';
import { UserRepository } from './user.repository';

@Controller('/usuarios')
export class UserController {
  private userRepository = new UserRepository();

  @Post()
  async createUser(@Body() userData) {
    this.userRepository.save(userData);
    return userData;
  }
}
