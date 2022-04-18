/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('school', [
			{
				id: '3fdaa00a-ab9b-4d83-820f-a2606a575be0',
				name: 'Vallaskóli',
				email: 'vallaskoli@vallaskoli.is',
				location: 'Sólvellir 2, 800 Selfoss',
				phone: '4805800',
				active: true,
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '8c85ea55-79e0-4921-8ad4-0e765baa8d3b',
				name: 'Stekkjaskóli',
				email: 'stekkjaskoli@stekkjaskoli.is',
				location: 'Heiðarstekkur 10, 800 Selfoss',
				phone: '4801600',
				active: true,
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
		return queryInterface.bulkDelete('school', null, {});
	},
};
