import { IAMModule } from '@iam/infra'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [IAMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
