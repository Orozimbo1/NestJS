import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: `64byl$4\\/}#Nx2Qixd(]k~g"M%pLyggW`,
    }),
  ],
})
export class AuthModule {}
