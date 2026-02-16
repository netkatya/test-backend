import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, propertyId: number, amount: number) {
    const property = await this.prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (amount < property.tiket) {
      throw new BadRequestException(`Minimum investment is ${property.tiket}`);
    }

    return this.prisma.application.create({
      data: {
        userId,
        propertyId,
        amount,
      },
    });
  }
}
