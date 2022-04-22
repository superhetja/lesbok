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
		return queryInterface.bulkInsert('user_student', [
			{
				user_id: 'ed219c4e-7fd4-4f9b-9f11-2dc0d2b48e73',
				student_id: 'c6f666dd-c39a-4838-babd-d9d6ed097514',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'ed219c4e-7fd4-4f9b-9f11-2dc0d2b48e73',
				student_id: '045c0724-172b-4879-8834-26034663def9',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				student_id: 'd0e9d9e1-67dd-4826-802f-eef8c9cf20da',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
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
	},
};
