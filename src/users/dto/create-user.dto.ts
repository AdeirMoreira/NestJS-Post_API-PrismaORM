import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'Email do usuário' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Nome do usuário' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Define se o usuádio é administrador',
        default: false,
    })
    @IsBoolean()
    @IsNotEmpty()
    admin: boolean;
}
