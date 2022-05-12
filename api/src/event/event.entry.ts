import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Entry } from 'entry';
import { Message } from './message.model';

@Injectable()
export class Event {
	constructor(private eventEmitter: EventEmitter2) {}

	@OnEvent('entry.create')
	handleEntryCreatedEvent(entry: Entry) {
		const dateNow = Date.now();
		const diff = dateNow - entry.createdAt;
		if (diff > 7) {
			Message.create();
		}
	}
}
