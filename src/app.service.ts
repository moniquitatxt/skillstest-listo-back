import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AppService {
  getHello(): string {
    const pato: string = process.env.PATO;
    return pato;
  }
}
