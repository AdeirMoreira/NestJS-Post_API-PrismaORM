import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
    @ApiProperty({ description: 'Título da postagem' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: 'Conteúdo da postagem' })
    @IsString()
    @IsOptional()
    content: string;

    @ApiProperty({ description: 'Autor da postagem' })
    @IsEmail()
    authorEmail: string;
}
