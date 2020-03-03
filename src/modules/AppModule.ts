import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { GlobalModule } from '../config/GlobalModule';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { routes } from '../routes';

@Module({
    imports: [RouterModule.forRoutes(routes), GlobalModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
