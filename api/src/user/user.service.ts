import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // Importe o Prisma Client
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private readonly prisma = new PrismaClient(); // Crie uma instância do Prisma Client

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return newUser;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { name, email, password } = updateUserDto;
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
      },
    });

    return updatedUser;
  }

  async remove(id: number) {
    const deletedUser = await this.prisma.user.delete({
      where: { id },
    });
    return deletedUser;
  }
}
