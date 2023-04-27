import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor (
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
  const { username, password } = authCredentialsDto;
  const user = this.usersRepository.create({
    username, 
    password,
  });

  await this.usersRepository.save(user);
  }
}
