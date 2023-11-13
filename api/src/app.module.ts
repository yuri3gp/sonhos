import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DreamModule} from './dream/dream.module';

@Module({
  imports: [UserModule, DreamModule],
})
export class AppModule {}
