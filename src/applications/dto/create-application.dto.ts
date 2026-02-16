import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty({
    example: 1,
    description: 'Property ID',
  })
  @IsInt()
  propertyId: number;

  @ApiProperty({
    example: 60000,
    description: 'Investment amount (must be >= ticket)',
  })
  @IsInt()
  @Min(1)
  amount: number;
}
