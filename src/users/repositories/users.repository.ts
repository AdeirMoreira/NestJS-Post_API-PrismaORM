import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.prismaService.user.create({ data: createUserDto });
    }

    async findAll(): Promise<UserEntity[]> {
        return this.prismaService.user.findMany({
            include: {
                post: {
                    select: {
                        title: true,
                        createdAt: true,
                    },
                },
            },
        });
    }

    async findOne(id: number): Promise<UserEntity> {
        return this.prismaService.user.findUnique({
            where: { id },
            include: {
                post: {
                    select: {
                        title: true,
                        createdAt: true,
                    },
                },
            },
        });
    }

    async update(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return this.prismaService.user.update({
            where: { id },
            data: updateUserDto,
            include: {
                post: {
                    select: {
                        title: true,
                        createdAt: true,
                    },
                },
            },
        });
    }

    async remove(id: number): Promise<UserEntity> {
        return this.prismaService.user.delete({ where: { id } });
    }
}
