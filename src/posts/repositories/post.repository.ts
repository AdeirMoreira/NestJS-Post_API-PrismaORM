import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'src/commom/errors/types/NotFoundError';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createPostDto: CreatePostDto): Promise<PostEntity> {
        const { authorEmail } = createPostDto;
        delete createPostDto.authorEmail;
        const user = await this.prismaService.user.findUnique({
            where: { email: authorEmail },
        });
        if (!user) throw new NotFoundError('Author not found');
        const data: Prisma.PostCreateInput = {
            ...createPostDto,
            author: { connect: { email: authorEmail } },
        };
        return this.prismaService.post.create({ data });
    }

    async findAll(): Promise<PostEntity[]> {
        return this.prismaService.post.findMany({ include: { author: true } });
    }

    async findOne(id: number): Promise<PostEntity> {
        return this.prismaService.post.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });
    }

    async update(
        id: number,
        updatePostDto: UpdatePostDto,
    ): Promise<PostEntity> {
        const { authorEmail } = updatePostDto;
        if (!authorEmail)
            return this.prismaService.post.update({
                data: updatePostDto,
                where: { id },
            });
        delete updatePostDto.authorEmail;
        const user = await this.prismaService.user.findUnique({
            where: { email: authorEmail },
        });
        if (!user) throw new NotFoundError('Author not found');
        const data: Prisma.PostUpdateInput = {
            ...updatePostDto,
            author: { connect: { email: authorEmail } },
        };
        return this.prismaService.post.update({
            where: { id },
            data,
            include: { author: { select: { name: true } } },
        });
    }

    async delete(id: number): Promise<PostEntity> {
        return this.prismaService.post.delete({ where: { id } });
    }
}
