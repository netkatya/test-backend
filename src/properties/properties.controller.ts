import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PropertyResponseDto } from './dto/property-response.dto';
import { PropertiesService } from './properties.service';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Properties')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  @ApiOkResponse({ type: [PropertyResponseDto] })
  getAll() {
    return this.propertiesService.findAll();
  }
}
