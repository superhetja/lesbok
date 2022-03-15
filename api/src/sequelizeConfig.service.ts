import { Injectable } from '@nestjs/common';
import {
	SequelizeModuleOptions,
	SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { SchoolModel } from 'Schools/school.model';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as dbConfig from '../sequelize.config';

const getOptions = (): SequelizeModuleOptions => ({
	define: {
		underscored: true,
		timestamps: true,
		createdAt: 'created',
		updatedAt: 'modified',
	},
	dialectOptions: {
		useUTC: true,
	},
	autoLoadModels: true,
	synchronize: true,
});

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
	createSequelizeOptions(): SequelizeModuleOptions {
		const env = process.env.NODE_ENV || 'development';
		const config = (dbConfig as { [key: string]: object })[env];
		return {
			...config,
			...getOptions(),
		};
	}
}
