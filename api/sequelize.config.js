/* exlint-env node */
module.exports = {
	developement: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_ROOT_PASSWORD,
		database: process.env.MYSQL_DB_NAME,
		port: +process.env.MYSQL_PORT,
		dialect: 'mariadb',
		host: process.env.MYSQL_HOST,
	},
}