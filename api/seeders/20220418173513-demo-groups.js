/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('group', [
			{
				id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				name: '1. EK',
				school_id: '8c85ea55-79e0-4921-8ad4-0e765baa8d3b',
				description: 'Nemendur í 1. bekk í Stekkjaskóla',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
				name: '1. AB',
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
		return queryInterface.bulkDelete('group', null, {});
	},
};
