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
		return queryInterface.bulkInsert('access_table', [
			{
				user_id: '84f575f0-58a0-47e4-835f-dce5591622df',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'b5e44efa-2966-470c-888a-dfd7ceb5be8c',
				group_id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '28f8ee3d-d63f-48b7-8be3-a102231f3bf5',
				group_id: '93611fb1-8ed2-41c2-8f40-780240a41828',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '8d823a90-2617-4ffb-b4e3-765a29f98da6',
				group_id: '8ab43c10-74c8-4bbb-8815-d95e748b8e42',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'c19a9fe6-b43f-46bd-9263-f59514122d7c',
				group_id: '15e72c8b-c3d8-49e0-b4e0-d768b74fad56',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '9310ccea-f958-49e5-91de-5bc000f53c46',
				group_id: 'f14f0d25-a597-4129-9204-d03457d5e8a1',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'dc7f1d86-8a7c-48bf-a4f4-5fd4e5fb38e3',
				group_id: 'ee80afaf-2b69-4c80-a20f-f61cfa2781f7',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '6543d601-0659-442c-838a-d31c0289d345',
				group_id: '1f7e7dfe-cd1f-4a9f-9977-db87ed71be38',
				role: 'Teacher',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				role: 'Guardian',
				created: new Date(),
				modified: new Date(),
			},
			{
				//
				user_id: 'ed219c4e-7fd4-4f9b-9f11-2dc0d2b48e73',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				role: 'Guardian',
				created: new Date(),
				modified: new Date(),
			},
			{
				//
				user_id: 'ed219c4e-7fd4-4f9b-9f11-2dc0d2b48e73',
				group_id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
				role: 'Guardian',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				role: 'Guardian',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				group_id: 'd26f1ce2-1c31-43d0-8358-f5fece5e1d6f',
				role: 'Guardian',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '9902e245-254b-4c30-86b6-7c80f2230572',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				role: 'Guardian',
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
		return queryInterface.bulkDelete('access_table', null, {});
	},
};
