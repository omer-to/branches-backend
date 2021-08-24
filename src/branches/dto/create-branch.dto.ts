import { IsLatitude, IsLongitude, IsString, IsPhoneNumber, MinLength, IsNotEmpty } from 'class-validator'

export class CreateBranchDto {
      @IsString()
      @IsNotEmpty()
      fullAddress: string

      @IsLatitude({ message: 'Latitude must be between -90 and 90.' })
      latitude: number

      @IsLongitude({ message: 'Longitude must be between -180 and 180.' })
      longitude: number

      @IsString()
      @MinLength(2)
      name: string

      @IsPhoneNumber('TR')
      phone: string
}
