import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';


@Injectable()
export class AppService {

  @OnEvent('testEvent', { promisify: true, async: true })
  getHello(): string {
    return 'Hello World!';
  }
}
