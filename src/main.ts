import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConflictInterceptor } from './commom/errors/interceptors/Conflict.interceptor';
import { DataBaseInterceptor } from './commom/errors/interceptors/DataBase.interceptor';
import { NotFoundInterceptor } from './commom/errors/interceptors/NotFound.interceptor';
import { UnauthorizedInterceptor } from './commom/errors/interceptors/Unauthorized.interceptor';
// import { HttpExceptionFilter } from './commom/filters/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );
    // app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new ConflictInterceptor());
    app.useGlobalInterceptors(new DataBaseInterceptor());
    app.useGlobalInterceptors(new UnauthorizedInterceptor());
    app.useGlobalInterceptors(new NotFoundInterceptor());

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
