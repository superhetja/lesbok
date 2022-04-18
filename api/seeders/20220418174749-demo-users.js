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
				email: 'embla@stekkjaskoli.is',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'b5e44efa-2966-470c-888a-dfd7ceb5be8c',
				name: 'Arnar Baldursson',
				school_id: '8c85ea55-79e0-4921-8ad4-0e765baa8d3b',
				description: 'Nemendur í 1. bekk í Stekkjaskóla',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '93611fb1-8ed2-41c2-8f40-780240a41828',
				name: '2. JL',
				school_id: '8c85ea55-79e0-4921-8ad4-0e765baa8d3b',
				description: 'Nemendur í 2. bekk í Stekkjaskóla',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '8ab43c10-74c8-4bbb-8815-d95e748b8e42',
				name: '2. OM',
				school_id: '8c85ea55-79e0-4921-8ad4-0e765baa8d3b',
				description: 'Nemendur í 2. bekk í Stekkjaskóla',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '15e72c8b-c3d8-49e0-b4e0-d768b74fad56',
				name: '1. PN',
				school_id: '3fdaa00a-ab9b-4d83-820f-a2606a575be0',
				description: 'Nemendur í 1. bekk í Vallaskóla',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'f14f0d25-a597-4129-9204-d03457d5e8a1',
				name: '1. RG',
				school_id: '3fdaa00a-ab9b-4d83-820f-a2606a575be0',
				description: 'Nemendur í 1. bekk í Vallaskóla',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'ee80afaf-2b69-4c80-a20f-f61cfa2781f7',
				name: '2. TV',
				school_id: '3fdaa00a-ab9b-4d83-820f-a2606a575be0',
				description: 'Nemendur í 2. bekk í Vallaskóla',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '1f7e7dfe-cd1f-4a9f-9977-db87ed71be38',
				name: '2. FA',
				school_id: '3fdaa00a-ab9b-4d83-820f-a2606a575be0',
				description: 'Nemendur í 2. bekk í Vallaskóla',
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
