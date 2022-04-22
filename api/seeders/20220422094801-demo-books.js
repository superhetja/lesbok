/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert('book', [
			{
				id: '3818439a-b5ca-47bd-8f05-12f8491ce6b4',
				name: 'Einar Áskell',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'f6f664c3-d818-4b3b-9164-887d6ddca689',
				name: 'Emil í Kattholti',
				created: new Date(),
				modified: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('book', null, {});
	},
};
