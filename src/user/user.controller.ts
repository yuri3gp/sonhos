import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel, Prisma } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserModel | null> {
    const userWhereUniqueInput: Prisma.UserWhereUniqueInput = {
      id: parseInt(id, 10),
    };
    return this.userService.user(userWhereUniqueInput);
  }

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post()
  async createUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    const userWhereUniqueInput: Prisma.UserWhereUniqueInput = {
      id: parseInt(id, 10),
    };
    return this.userService.updateUser({
      where: userWhereUniqueInput,
      data: userData,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    const userWhereUniqueInput: Prisma.UserWhereUniqueInput = {
      id: parseInt(id, 10),
    };
    return this.userService.deleteUser(userWhereUniqueInput);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }): Promise<{ id: number }> {
    const { email, password } = body;
    const user = await this.userService.loginUser(email, password);
    return user;
  }
}
