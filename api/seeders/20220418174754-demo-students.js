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
			// TODO MAKE TEACHER KIDS
			{
				// Patient sero
				id: '6543d601-0659-442c-838a-d31c0289d345',
				name: 'Heiðar Páll',
				gender: 'Male',
				national_id: '0101152200',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '045c0724-172b-4879-8834-26034663def9',
				name: 'Hrafn Liljar',
				gender: 'Male',
				national_id: '0101152150',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'c6f666dd-c39a-4838-babd-d9d6ed097514',
				name: 'Logi Hrafn',
				gender: 'Male',
				national_id: '0102152390',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'd0e9d9e1-67dd-4826-802f-eef8c9cf20da',
				name: 'Sólrún Ásta',
				gender: 'Female',
				national_id: '0101152680',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '88ea1e84-71ba-4272-b0a5-4e9a07611ae5',
				name: 'Ásmundur Einar',
				gender: 'Male',
				national_id: '0101152370',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '9f16e000-c6b1-442b-86b6-3ae7879fddc5',
				name: 'Jón Páll',
				gender: 'Male',
				national_id: '0101152360',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'c3ddb8c7-6665-40a6-aea1-4af54a3f5fd7',
				name: 'Logi Sveinn',
				gender: 'Male',
				national_id: '0102152350',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'e513867f-6e7f-489b-9a6a-0202ca8f580f',
				name: 'Ásta Laufey',
				gender: 'Female',
				national_id: '0101152640',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'c8857c57-c4b3-4c75-80ff-eac8df056d67',
				name: 'Gunnlaugur Gauti',
				gender: 'Male',
				national_id: '0101152330',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'a59408e9-45b8-4921-b6e8-945a7381aa48',
				name: 'Tómas Bragi',
				gender: 'Male',
				national_id: '0101152320',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'ba8c40b5-1dce-4694-9ce1-2d39fb399152',
				name: 'Halldór Gunnar',
				gender: 'Male',
				national_id: '0102152310',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'ed67826e-4e5f-4ff1-b6d7-ede67ad22e19',
				name: 'Sigríður Margrét',
				gender: 'Female',
				national_id: '0101152699',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '2180b363-3f8c-491c-be8a-fa730c31ea4d',
				name: 'Sigurður Páll',
				gender: 'Male',
				national_id: '0101152308',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '7418fa25-72e2-44c0-99a5-762f38a0bd1b',
				name: 'Ólafur Ragnar',
				gender: 'Male',
				national_id: '0101152357',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '46c8e189-165d-4c49-b43b-699ad731c36c',
				name: 'Jónatann Ívar',
				gender: 'Male',
				national_id: '0102152306',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'a06a4dc5-4906-4769-8bf7-20c0fa652f06',
				name: 'Sólveig Anna',
				gender: 'Female',
				national_id: '0101152695',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'eb50303a-becc-4d04-b6dd-5e75d427f19f',
				name: 'Gunnar Þór',
				gender: 'Male',
				national_id: '0101152304',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'ce0cdf14-18c7-4ba4-bd08-796f75d0b108',
				name: 'Jóhann Ísak',
				gender: 'Male',
				national_id: '0101152353',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: 'c7de0811-8f5d-4684-b296-2598b1cdb29e',
				name: 'Ýmir Hrafn',
				gender: 'Male',
				national_id: '0102152302',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
				created: new Date(),
				modified: new Date(),
			},
			{
				id: '1aafde90-d12c-48bd-a134-6393015e7309',
				name: 'Kristjana Ásta',
				gender: 'Female',
				national_id: '0101152691',
				group_id: '9172e6b0-227a-4365-9275-864ae7705bbd',
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
