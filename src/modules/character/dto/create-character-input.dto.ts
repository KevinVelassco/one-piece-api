import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength
} from 'class-validator';
import { CharacterGender, CharacterStatus } from '../character.entity';

export class CreateCharacterInput {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(CharacterStatus)
  readonly status: CharacterStatus;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CharacterGender)
  readonly gender: CharacterGender;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  readonly profileImage: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  readonly originUid: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  readonly raceUid: string;
}
