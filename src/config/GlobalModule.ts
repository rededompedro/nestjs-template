import { Module, Global, HttpModule } from '@nestjs/common';
@Global()
@Module({
    imports: [
        HttpModule.register({
            timeout: 7000,
        }),
    ],
    exports: [HttpModule],
})
export class GlobalModule {}
