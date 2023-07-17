import { PrismaClient } from '@prisma/client';

export class PrismaConnection<T> {
  private static prisma: { [key: string]: PrismaClient } = {};

  constructor(private readonly dbName: string, private readonly dbUrl: string) {}

  getConnection(): PrismaClient {
    if (!PrismaConnection.prisma[this.dbName]) {
      PrismaConnection.prisma[this.dbName] = new PrismaClient({
        datasources: {
          [this.dbName]: {
            url: this.dbUrl,
          },
        },
      });
    }

    return PrismaConnection.prisma[this.dbName];
  }
}
