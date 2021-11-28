import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ImageService } from './image.service';
import { Image } from './image.entity';
import { Public } from '../../common/decorators/public.decorator';
import { FindAllImagesInput } from './dto/find-all-images-input.dto';
import { FindOneImageInput } from './dto/find-one-image-input.dto';
import { CreateImageInput } from './dto/create-image-input.dto';
import { UpdateImageInput } from './dto/update-image-input.dto';

@ApiTags('image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Public()
  @Get()
  findAll(@Query() findAllImagesInput: FindAllImagesInput): Promise<any> {
    return this.imageService.findAll(findAllImagesInput);
  }

  @Public()
  @Get(':uid')
  findOne(
    @Param() findOneImageInput: FindOneImageInput
  ): Promise<Image | null> {
    return this.imageService.findOne(findOneImageInput);
  }

  @Post()
  create(@Body() createImageInput: CreateImageInput): Promise<Image> {
    return this.imageService.create(createImageInput);
  }

  @Put(':uid')
  update(
    @Param() findOneImageInput: FindOneImageInput,
    @Body() updateImageInput: UpdateImageInput
  ): Promise<Image> {
    return this.imageService.update(findOneImageInput, updateImageInput);
  }

  @Delete(':uid')
  delete(@Param() findOneImageInput: FindOneImageInput): Promise<Image> {
    return this.imageService.delete(findOneImageInput);
  }
}
