import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataBaseError } from '../types/DatabaseError';
import { handleDatabaseErros } from '../utils/handle-database-error';
import { isPrismaError } from '../utils/is-prisma-error.util';

@Injectable()
export class DataBaseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                if (isPrismaError(error)) {
                    error = handleDatabaseErros(error);
                }
                if (error instanceof DataBaseError) {
                    throw new BadRequestException(error.message);
                } else {
                    throw error;
                }
            }),
        );
    }
}
