import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupModule } from 'group/group.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SchoolModule } from './school/school.module';
import { EntryModule } from './entry/entry.module';
import { SequelizeConfigService } from './sequelizeConfig.service';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

// TODO: use sequlize.config.js
@Module({
	imports: [
		SequelizeModule.forRootAsync({
			useClass: SequelizeConfigService,
		}),
		EventEmitterModule.forRoot(),
		SchoolModule,
		EntryModule,
		GroupModule,
		StudentModule,
		UserModule,
		LoginModule,
	],
	// controllers: [AppController],
	// providers: [AppService],
})
export class AppModule {}
