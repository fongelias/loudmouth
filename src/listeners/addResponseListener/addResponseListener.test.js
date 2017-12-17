import assert from 'assert';
import { EventEmitter } from 'events';

import { addResponseListener } from './addResponseListener';
import { listeners } from '../../config';


describe('addResponseListener()', () => {

	it('should take an eventEmitter as an argument', () => {
		const eventEmitter = new EventEmitter();
		let errorThrown = false;

		try {
			addResponseListener(eventEmitter);
		} catch(e) {
			errorThrown = true;
		}

		assert(!errorThrown);
	});

	it('should throw an error if the first argument is not an eventEmitter', () => {
		const notEventEmitter = {};
		let errorThrown = false;

		try {
			addResponseListener(notEventEmitter);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	});

	it('should add a listener to eventEmitter that listens to the "loudmouth-log-response" event', () => {
		const eventEmitter = new EventEmitter();
		addResponseListener(eventEmitter);
		const listenerCount = eventEmitter.listenerCount(listeners.events.responseListener);

		assert(listenerCount == 1);
	});
})