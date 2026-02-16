import { IsInt, Min } from 'class-validator';

export class CreateApplicationDto {
  @IsInt()
  propertyId: number;

  @IsInt()
  @Min(1)
  amount: number;
}
