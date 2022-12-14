import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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

    const config = new DocumentBuilder()
        .setTitle('API NestJS,Prisma,Swagger')
        .setDescription('Uma API para praticar NestJS, Primsa e Swagger')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
