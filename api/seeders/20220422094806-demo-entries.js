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
		return queryInterface.bulkInsert('entry', [
			{
				id: 'aab84e3c-f9e7-4bd5-a18c-7fab88a945df',
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
				registered_by: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				page_from: '1',
				page_to: '5',
				date_of_entry: '2022-04-18',
				comment: '',
				time_spent: null,
				book_id: '3818439a-b5ca-47bd-8f05-12f8491ce6b4',
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
		return queryInterface.bulkDelete('entry', null, {});
	},
};
