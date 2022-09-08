import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstractError extends ConflictError {
    constructor(e: PrismaClientError) {
        const uniqueField = e.meta.target[0];
        super(`this ${uniqueField} already exists`);
    }
}
