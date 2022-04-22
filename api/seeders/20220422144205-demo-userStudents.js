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
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
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
				student_id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				student_id: 'd0e9d9e1-67dd-4826-802f-eef8c9cf20da',
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
