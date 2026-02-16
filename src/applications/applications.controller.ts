import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ApplicationResponseDto } from './dto/application-response.dto';

@ApiTags('Applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiCreatedResponse({ type: ApplicationResponseDto })
  create(@Req() req: any, @Body() dto: CreateApplicationDto) {
    return this.applicationsService.create(
      req.user.id,
      dto.propertyId,
      dto.amount,
    );
  }
}
