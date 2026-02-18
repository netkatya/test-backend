import { ApiProperty } from '@nestjs/swagger';

class UserDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'user@mail.com' })
  email: string;
}

export class AuthResponseDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({ type: UserDto })
  user: UserDto;
}
