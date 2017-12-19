import assert from 'assert';
import { EventEmitter } from 'events';

import { addRequestListener } from './addRequestListener';
import { listeners } from '../../config';


describe('addRequestListener()', () => {



	it('should take an eventEmitter as an argument', () => {
		const eventEmitter = new EventEmitter();
		let errorThrown = false;

		try {
			addRequestListener(eventEmitter);
		} catch(e) {
			errorThrown = true;
		}

		assert(!errorThrown);
	});

	it('should throw an error if the first argument is not an eventEmitter', () => {
		const notEventEmitter = {};
		let errorThrown = false;

		try {
			addRequestListener(notEventEmitter);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	});

	it('should add a listener to eventEmitter that listens to the "loudmouth-log-request" event', () => {
		const eventEmitter = new EventEmitter();
		addRequestListener(eventEmitter);
		const listenerCount = eventEmitter.listenerCount(listeners.events.requestListener);

		assert(listenerCount == 1);
	});

	
})