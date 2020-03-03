import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { AppModule } from './modules/AppModule';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(process.env.API_PREFIX || '');
    app.use(helmet());
    app.enableCors();
    app.use(compression());
    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
        }),
    );
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.listen(process.env.PORT || 3001, () => {
        Logger.log(
            `🚀\tServer is running on port ${process.env.PORT ||
                3001}! [gr:ready]`,
            'Bootstrap',
        );
    });
}

bootstrap();
