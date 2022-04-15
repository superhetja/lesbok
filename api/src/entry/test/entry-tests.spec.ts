import EntryController from 'entry/entry.controller';
import {
	createTestingEntryModule,
	testEntry,
} from './createTestingEntryModule';

describe('EntryController', () => {
	let entryController: EntryController;

	beforeEach(async () => {
		({ entryController } = await createTestingEntryModule());
	});

	it('should return an array of entries', async () => {
		expect(await entryController.findAll()).toEqual([testEntry]);
	});
});
