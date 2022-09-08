import { UniqueConstractError } from '../types/UniqueConstractError';
import { DataBaseError } from '../types/DatabaseError';
import { PrismaClientError } from '../types/PrismaClientError';

enum PrismaErrors {
    UNIQUECONSTRANT = 'P2002',
}

export const handleDatabaseErros = (e: PrismaClientError): Error => {
    switch (e.code) {
        case PrismaErrors.UNIQUECONSTRANT:
            return new UniqueConstractError(e);
        default:
            return new DataBaseError(e.message);
    }
};
