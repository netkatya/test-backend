import { ApiProperty } from '@nestjs/swagger';

export class PropertyResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'The Marina Torch' })
  title: string;

  @ApiProperty({ example: 6500000 })
  price: number;

  @ApiProperty({ example: 60000 })
  tiket: number;

  @ApiProperty({ example: 9.25 })
  yield: number;

  @ApiProperty({ example: 150 })
  daysLeft: number;

  @ApiProperty({ example: 75 })
  soldPercent: number;

  @ApiProperty({ example: 'https://image.jpg' })
  imageUrl: string;
}
