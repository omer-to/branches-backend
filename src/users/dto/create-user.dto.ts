import { IsEmail, IsString, MinLength } from 'class-validator'

// TODO: Move to a separate file
enum UserRole {
      employee = 'employee',
      employer = 'employer',
}
export class CreateUserDto {
      @IsEmail()
      email: string

      @IsString()
      @MinLength(8)
      password: string

      // TODO: Validate for enums
      role: UserRole
}