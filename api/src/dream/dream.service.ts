import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Dream, Prisma } from '@prisma/client';

@Injectable()
export class DreamService {
  constructor(private prisma: PrismaService) {}

  async dream(
    dreamWhereUniqueInput: Prisma.DreamWhereUniqueInput,
  ): Promise<Dream | null> {
    return this.prisma.dream.findUnique({
      where: dreamWhereUniqueInput,
    });
  }

  async dreams(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DreamWhereUniqueInput;
    where?: Prisma.DreamWhereInput;
    orderBy?: Prisma.DreamOrderByWithRelationInput;
  }): Promise<Dream[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dream.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDream(data: Prisma.DreamCreateInput): Promise<Dream> {
    return this.prisma.dream.create({
      data,
    });
  }

  async updateDream(params: {
    where: Prisma.DreamWhereUniqueInput;
    data: Prisma.DreamUpdateInput;
  }): Promise<Dream> {
    const { data, where } = params;
    return this.prisma.dream.update({
      data,
      where,
    });
  }

  async deleteDream(where: Prisma.DreamWhereUniqueInput): Promise<Dream> {
    return this.prisma.dream.delete({
      where,
    });
  }
}
