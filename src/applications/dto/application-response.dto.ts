import { ApiProperty } from '@nestjs/swagger';

export class ApplicationResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 60000 })
  amount: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  propertyId: number;

  @ApiProperty({ example: '2026-02-16T18:30:00.000Z' })
  createdAt: string;
}
