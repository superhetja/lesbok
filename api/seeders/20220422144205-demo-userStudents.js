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
				user_id: '9902e245-254b-4c30-86b6-7c80f2230572',
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
				created: new Date(),
				modified: new Date(),
			},
			//
			{
				user_id: '84f575f0-58a0-47e4-835f-dce5591622df',
				student_id: '045c0724-172b-4879-8834-26034663def9',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'b5e44efa-2966-470c-888a-dfd7ceb5be8c',
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '28f8ee3d-d63f-48b7-8be3-a102231f3bf5',
				student_id: 'c6f666dd-c39a-4838-babd-d9d6ed097514',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '28f8ee3d-d63f-48b7-8be3-a102231f3bf5',
				student_id: 'd0e9d9e1-67dd-4826-802f-eef8c9cf20da',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '8d823a90-2617-4ffb-b4e3-765a29f98da6',
				student_id: 'd0e9d9e1-67dd-4826-802f-eef8c9cf20da',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '8d823a90-2617-4ffb-b4e3-765a29f98da6',
				student_id: 'c6f666dd-c39a-4838-babd-d9d6ed097514',
				created: new Date(),
				modified: new Date(),
			},
			//
			{
				user_id: 'c19a9fe6-b43f-46bd-9263-f59514122d7c',
				student_id: '88ea1e84-71ba-4272-b0a5-4e9a07611ae5',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'c19a9fe6-b43f-46bd-9263-f59514122d7c',
				student_id: '9f16e000-c6b1-442b-86b6-3ae7879fddc5',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '9310ccea-f958-49e5-91de-5bc000f53c46',
				student_id: '9f16e000-c6b1-442b-86b6-3ae7879fddc5',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '9310ccea-f958-49e5-91de-5bc000f53c46',
				student_id: 'e513867f-6e7f-489b-9a6a-0202ca8f580f',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'dc7f1d86-8a7c-48bf-a4f4-5fd4e5fb38e3',
				student_id: 'c8857c57-c4b3-4c75-80ff-eac8df056d67',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'dc7f1d86-8a7c-48bf-a4f4-5fd4e5fb38e3',
				student_id: 'a59408e9-45b8-4921-b6e8-945a7381aa48',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'dc7f1d86-8a7c-48bf-a4f4-5fd4e5fb38e3',
				student_id: 'ba8c40b5-1dce-4694-9ce1-2d39fb399152',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				student_id: 'ed67826e-4e5f-4ff1-b6d7-ede67ad22e19',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				student_id: '2180b363-3f8c-491c-be8a-fa730c31ea4d',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '541535da-5a38-4fb1-8d6c-90eff0d56b50',
				student_id: 'c3ddb8c7-6665-40a6-aea1-4af54a3f5fd7',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'ed219c4e-7fd4-4f9b-9f11-2dc0d2b48e73',
				student_id: '7418fa25-72e2-44c0-99a5-762f38a0bd1b',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: 'ed219c4e-7fd4-4f9b-9f11-2dc0d2b48e73',
				student_id: '46c8e189-165d-4c49-b43b-699ad731c36c',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				student_id: 'a06a4dc5-4906-4769-8bf7-20c0fa652f06',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				student_id: 'eb50303a-becc-4d04-b6dd-5e75d427f19f',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '05ad625f-a584-4c18-b1be-1bc390f06114',
				student_id: 'c7de0811-8f5d-4684-b296-2598b1cdb29e',
				created: new Date(),
				modified: new Date(),
			},
			// Sindri's kid
			{
				user_id: '9902e245-254b-4c30-86b6-7c80f2230572',
				student_id: 'ce0cdf14-18c7-4ba4-bd08-796f75d0b108',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '241bbcdd-415e-4ba8-9cf3-765c36b69fd2',
				student_id: 'ce0cdf14-18c7-4ba4-bd08-796f75d0b108',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '241bbcdd-415e-4ba8-9cf3-765c36b69fd2',
				student_id: '6543d601-0659-442c-838a-d31c0289d345',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '3dc4e76c-a756-4988-b16c-c990e5d7b8a5',
				student_id: 'eb50303a-becc-4d04-b6dd-5e75d427f19f',
				created: new Date(),
				modified: new Date(),
			},
			{
				user_id: '3dc4e76c-a756-4988-b16c-c990e5d7b8a5',
				student_id: '1aafde90-d12c-48bd-a134-6393015e7309',
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
