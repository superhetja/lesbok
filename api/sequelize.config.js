/* exlint-env node */
module.exports = {
	development: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_ROOT_PASSWORD,
		database: process.env.MYSQL_DB_NAME,
		port: +process.env.MYSQL_PORT,
		dialect: 'mariadb',
		host: process.env.MYSQL_HOST,
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};
