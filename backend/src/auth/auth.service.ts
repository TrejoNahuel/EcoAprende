import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/models/user.model';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async registerUser(dto: RegisterUserDto): Promise<User> {
    const user = await this.usersService.findByEmail(dto.email);

    if (user) {
      throw new HttpException("Email en uso", HttpStatus.CONFLICT);
    }
    
    return this.usersService.create(dto);
  }
}
