import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { AppController } from './app.controller';
// import AppService from './app.service';
import { SchoolModule } from './Schools/schools.module';
import { EntryModule } from './entry/entry.module';
import { SequelizeConfigService } from './sequelizeConfig.service';

// TODO: use sequlize.config.js
@Module({
	imports: [
		SequelizeModule.forRootAsync({
			useClass: SequelizeConfigService,
		}),
		SchoolModule,
		EntryModule,
	],
	// controllers: [AppController],
	// providers: [AppService],
})
export class AppModule {}
