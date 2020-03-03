import { Injectable } from '@nestjs/common';

type Hello = {
    hello: string;
};

@Injectable()
export class AppService {
    getHello(): Hello {
        return { hello: 'world' };
    }
}
