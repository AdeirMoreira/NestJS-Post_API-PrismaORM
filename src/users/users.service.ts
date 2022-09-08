import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/commom/errors/types/NotFoundError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UserRepository) {}

    create(createUserDto: CreateUserDto) {
        return this.usersRepository.create(createUserDto);
    }

    findAll() {
        return this.usersRepository.findAll();
    }

    async findOne(id: number) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new NotFoundError('Usuário não encontrado');
        }
        return user;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }

    remove(id: number) {
        return this.usersRepository.remove(id);
    }
}
