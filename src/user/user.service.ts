import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-users.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    return this.prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }
}
