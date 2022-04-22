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
				id: 'b40fdb72-5036-40a8-9ee7-a37424f86b9a',
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
				registered_by: 'vallaskoli@vallaskoli.is',
				page_from: 'Sólvellir 2, 800 Selfoss',
				page_to: '4805800',
				date_of_entry: new Date(),
				comment: '',
				time_spent: null,
				book_id: '',
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
		return queryInterface.bulkDelete('entry', null, {});
	},
};
