import { IsEmail, IsString, MinLength } from 'class-validator'
import { UserRole } from 'src/enums/UserRole'

export class CreateUserDto {
      @IsEmail()
      email: string

      @IsString()
      @MinLength(8)
      password: string

      // TODO: Validate for enums
      role: UserRole
}