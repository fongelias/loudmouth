import assert from 'assert';
import { EventEmitter } from 'events';

import { addTraceListener } from './addTraceListener';
import { listeners } from '../../config';


describe('addTraceListener()', () => {



	it('should take an eventEmitter as an argument', () => {
		const eventEmitter = new EventEmitter();
		let errorThrown = false;

		try {
			addTraceListener(eventEmitter);
		} catch(e) {
			errorThrown = true;
		}

		assert(!errorThrown);
	});

	it('should throw an error if the first argument is not an eventEmitter', () => {
		const notEventEmitter = {};
		let errorThrown = false;

		try {
			addTraceListener(notEventEmitter);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	});

	it('should add a listener to eventEmitter that listens to the "loudmouth-log-trace" event', () => {
		const eventEmitter = new EventEmitter();
		addTraceListener(eventEmitter);
		const listenerCount = eventEmitter.listenerCount(listeners.events.traceListener);

		assert(listenerCount == 1);
	});
})