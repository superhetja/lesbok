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

		return queryInterface.bulkInsert('student', [
			{
				id: '6543d601-0659-442c-838a-d31c0289d345',
				name: 'Heiðar Páll',
				gender: 'Male',
				national_id: 'IS',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '045c0724-172b-4879-8834-26034663def9',
				name: 'Hrafn Liljar',
				gender: 'Male',
				national_id: 'IS',
				group_id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
				name: 'Logi Hrafn',
				gender: 'Male',
				national_id: 'IS',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'd0e9d9e1-67dd-4826-802f-eef8c9cf20da',
				name: 'Sólrún Ásta',
				gender: 'Female',
				national_id: 'IS',
				group_id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
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
		return queryInterface.bulkDelete('student', null, {});
	},
};
