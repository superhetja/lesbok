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
				id: '9ea80277-8f2d-4bab-98c9-7f6802f055fd',
				name: 'Emil í Kattholti',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'b5287e9d-db4f-426c-95f0-23edaa65840c',
				name: 'Ari fer heim',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '856e7d5a-e3b4-4494-b710-36a62108ec87',
				name: 'Sísí fer á róló',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '77b0e7cc-a4bb-4495-9b0a-7fa4485bcb01',
				name: 'Lóa fer til tannlæknis',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '2d282774-0c8f-4507-b95d-ba2cf292dc83',
				name: 'Krakkarnir í kátugötu Bók nr 1',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'af026e5d-39fc-43c0-8812-ca64390b1d69',
				name: 'Furðudýr',
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
