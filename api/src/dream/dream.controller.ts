import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DreamService } from './dream.service'; // Certifique-se de importar o serviço correto
import { Dream as DreamModel, Prisma } from '@prisma/client';

@Controller('dreams')
export class DreamController {
  constructor(private readonly dreamService: DreamService) {}

  @Get(':id')
  async getDream(@Param('id') id: string): Promise<DreamModel | null> {
    const dreamWhereUniqueInput: Prisma.DreamWhereUniqueInput = {
      id: parseInt(id, 10),
    };
    return this.dreamService.dream(dreamWhereUniqueInput);
  }

  @Get()
  async getDreams(): Promise<DreamModel[]> {
    return this.dreamService.dreams({});
  }

  @Post()
  async createDream(
    @Body() dreamData: Prisma.DreamCreateInput,
  ): Promise<DreamModel> {
    return this.dreamService.createDream(dreamData);
  }

  @Put(':id')
  async updateDream(
    @Param('id') id: string,
    @Body() dreamData: Prisma.DreamUpdateInput,
  ): Promise<DreamModel> {
    const dreamWhereUniqueInput: Prisma.DreamWhereUniqueInput = {
      id: parseInt(id, 10),
    };
    return this.dreamService.updateDream({
      where: dreamWhereUniqueInput,
      data: dreamData,
    });
  }

  @Delete(':id')
  async deleteDream(@Param('id') id: string): Promise<DreamModel> {
    const dreamWhereUniqueInput: Prisma.DreamWhereUniqueInput = {
      id: parseInt(id, 10),
    };
    return this.dreamService.deleteDream(dreamWhereUniqueInput);
  }
}
