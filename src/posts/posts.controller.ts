import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @ApiNotFoundResponse({ description: 'Autor não encontrado!' })
    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto);
    }

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    @ApiNotFoundResponse({ description: 'Post não encontrado!' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postsService.findOne(+id);
    }

    @ApiNotFoundResponse({ description: 'Post ou Autor não encontrado!' })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.update(+id, updatePostDto);
    }

    @ApiNotFoundResponse({ description: 'Post não encontrado!' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postsService.remove(+id);
    }
}
