import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto';

import {
  ApiTags,
  ApiOperation,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiConflictResponse,
} from '@nestjs/swagger';

import { UserResponseDto } from '../users/dto/user-response.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  // reg
  @Post('register')
  @ApiOperation({ summary: 'Register new user' })
  @ApiOkResponse({ type: AuthResponseDto })
  @ApiConflictResponse({ description: 'Email already in use' })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  register(@Body() dto: RegisterDto): Promise<AuthResponseDto> {
    return this.auth.register(dto.email, dto.password);
  }

  // login
  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiOkResponse({ type: AuthResponseDto })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  login(@Body() dto: LoginDto): Promise<AuthResponseDto> {
    return this.auth.login(dto.email, dto.password);
  }

  // me
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get current user' })
  @ApiOkResponse({ type: UserResponseDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  me(@Req() req: { user: UserResponseDto }): UserResponseDto {
    return req.user;
  }
}
