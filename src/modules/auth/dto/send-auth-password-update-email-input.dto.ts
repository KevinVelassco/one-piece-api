import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class SendAuthPasswordUpdateEmailInput {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  readonly authUid: string;
}
