import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/commom/errors/types/NotFoundError';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/post.repository';

@Injectable()
export class PostsService {
    constructor(private readonly potsRepostitory: PostRepository) {}

    create = (createPostDto: CreatePostDto) =>
        this.potsRepostitory.create(createPostDto);

    findAll = () => this.potsRepostitory.findAll();

    findOne = async (id: number) => {
        const post = await this.potsRepostitory.findOne(id);
        if (!post) throw new NotFoundError('Post not found!');
        return post;
    };

    update = async (id: number, updatePostDto: UpdatePostDto) => {
        await this.findOne(id);
        return this.potsRepostitory.update(id, updatePostDto);
    };

    remove = async (id: number) => {
        await this.findOne(id);
        return this.potsRepostitory.delete(id);
    };
}
