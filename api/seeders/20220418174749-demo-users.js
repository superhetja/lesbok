/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('user', [
			// 			60bb8f1a-43a3-4777-b2f2-7151240c97cd

			// b5e44efa-2966-470c-888a-dfd7ceb5be8c

			// 18305a8c-01eb-4eb6-9a06-25ef0228d967
			{
				id: '84f575f0-58a0-47e4-835f-dce5591622df',
				name: 'Embla Kristjánsdóttir',
				national_id: '200294-2999',
				email: 'embla@stekkjaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'b5e44efa-2966-470c-888a-dfd7ceb5be8c',
				name: 'Arnar Baldursson',
				national_id: '200294-2989',
				email: 'arnar@stekkjaskoli.is	',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '28f8ee3d-d63f-48b7-8be3-a102231f3bf5',
				name: 'Jóhann Lárusson',
				national_id: '200294-2930',
				email: 'johann@stekkjaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '8d823a90-2617-4ffb-b4e3-765a29f98da6',
				name: 'Ormur Magnússon',
				national_id: '200294-2599',
				email: 'ormur@stekkjaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'c19a9fe6-b43f-46bd-9263-f59514122d7c',
				name: 'Pálína Nökkvadóttir',
				national_id: '200296-2999',
				email: 'palina@vallaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '9310ccea-f958-49e5-91de-5bc000f53c46',
				name: 'Ragnar Guðmundsson',
				national_id: '200294-3099',
				email: 'ragnar@vallaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'dc7f1d86-8a7c-48bf-a4f4-5fd4e5fb38e3',
				name: 'Tinna Vignisdóttir',
				national_id: '200284-2999',
				email: 'tinna@vallaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				name: 'Freyja Arnarsdóttir',
				national_id: '200294-2559',
				email: 'freyja@vallaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'ed219c4e-7fd4-4f9b-9f11-2dc0d2b48e73',
				name: 'Bergur Þór',
				national_id: '200294-2929',
				email: 'bergura@gmail.com',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				name: 'Bertha Eygló',
				national_id: '200194-9429',
				email: 'bertha@gmail.com',
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
		return queryInterface.bulkDelete('user', null, {});
	},
};
