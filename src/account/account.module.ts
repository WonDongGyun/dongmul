import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AccountController } from './account.controller';
import { AccountService, KakaoLogin } from './account.service';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [
		TypeOrmModule.forFeature([User]),
		// PassportModule,
		JwtModule.registerAsync({
			useFactory: () => ({
				secret: process.env.SECRET_KEY,
				signOptions: {
					expiresIn: '60m'
				}
			})
		})
	],
	controllers: [AccountController],
	providers: [AccountService, JwtStrategy, GoogleStrategy, KakaoLogin]
})
export class AccountModule {}
