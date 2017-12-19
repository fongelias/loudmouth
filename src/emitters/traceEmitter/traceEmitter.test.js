import assert from 'assert';

import { EventEmitter } from 'events';

import { listeners, logLevel } from '../../config';

import { traceEmitter } from './traceEmitter';

describe('traceEmitter()', () => {

	const level = logLevel.INFO;
	const body = "Sample message"

	it('should emit a "loudmouth-log-trace" event', () => {
		const emitter = new EventEmitter();
		let isEmitted = false;
		emitter.on(listeners.events.traceListener, () => { isEmitted = true; });

		traceEmitter(emitter, level, body);

		assert(isEmitted);
	});

	it('should send an argument object with a log level', () => {
		const emitter = new EventEmitter();
		let hasLogLevel = false;
		emitter.on(listeners.events.traceListener, (argObj) => { 
			hasLogLevel = argObj.logLevel ? true : false; 
		});

		traceEmitter(emitter, level, body);

		assert(hasLogLevel);
	})

	it('should send an argument object containing a time', () => {
		const emitter = new EventEmitter();
		let hasTime = false;
		emitter.on(listeners.events.traceListener, (argObj) => { 
			hasTime = argObj.time ? true : false; 
		});

		traceEmitter(emitter, level, body);

		assert(hasTime);
	})

	it('should send an argument object containing a body', () => {
		const emitter = new EventEmitter();
		let hasBody = false;
		emitter.on(listeners.events.traceListener, (argObj) => { 
			hasBody = argObj.body ? true : false; 
		});

		traceEmitter(emitter, level, body);

		assert(hasBody);
	})

});