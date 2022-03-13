import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { AppController } from './app.controller';
// import AppService from './app.service';
import { SchoolModule } from './Schools/schools.module';
import { EntryModule } from './entry/entry.module';

// TODO: use sequlize.config.js
@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'mariadb',
			host: process.env.MYSQL_HOST,
			port: +process.env.MYSQL_PORT, // convert to number with +
			username: process.env.MYSQL_USER,
			password: process.env.MYSQL_ROOT_PASSWORD,
			database: process.env.MYSQL_DB_NAME,
		}),
		SchoolModule,
		EntryModule,
	],
	// controllers: [AppController],
	// providers: [AppService],
})
export class AppModule {}
