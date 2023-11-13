import { Module } from '@nestjs/common';
import { DreamService } from './dream.service';
import { DreamController } from './dream.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [DreamController],
  providers: [DreamService, PrismaService],
})
export class DreamModule {}
