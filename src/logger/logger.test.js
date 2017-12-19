import assert from 'assert';
import { EventEmitter } from 'events';

import { listeners, requestType } from '../config';

import { Logger } from './logger';


describe('Logger class', () => {

	const endpointUri = "/sample/endpoint";

	describe('#constructor()', () => {
		it('should add an EventEmitter as a member', () => {
			assert(new Logger(new EventEmitter).emitter instanceof EventEmitter);
		})
	});

	describe('#info()', () => {
		it('should emit a "loudmouth-log-trace" event with logLevel "INFO"', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.traceListener, () => {
				isEmitted = true;
			})

			log.info("logged");

			assert(isEmitted);
		})
	})

	describe('#debug()', () => {
		it('should emit a "loudmouth-log-trace" event with logLevel "DEBUG"', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.traceListener, () => {
				isEmitted = true;
			})

			log.debug("logged");

			assert(isEmitted);
		})
	})

	describe('#error()', () => {
		it('should emit a "loudmouth-log-trace" event with logLevel "ERROR"', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.traceListener, () => {
				isEmitted = true;
			})

			log.error("logged");

			assert(isEmitted);
		})
	})

	describe('#getRequest()', () => {
		it('should emit a "loudmouth-log-request" event with requestType "GET"', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.requestListener, () => {
				isEmitted = true;
			})

			log.getRequest(endpointUri);

			assert(isEmitted);
		})
	})

	describe('#postRequest()', () => {
		it('should emit a "loudmouth-log-request" event with requestType "POST"', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.requestListener, () => {
				isEmitted = true;
			})

			log.postRequest(endpointUri);

			assert(isEmitted);
		})
	})

	describe('#putRequest()', () => {
		it('should emit a "loudmouth-log-request" event with requestType "PUT"', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.requestListener, () => {
				isEmitted = true;
			})

			log.putRequest(endpointUri);

			assert(isEmitted);
		})
	})

	describe('#deleteRequest()', () => {
		it('should emit a "loudmouth-log-request" event with requestType "DELETE"', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.requestListener, () => {
				isEmitted = true;
			})

			log.deleteRequest(endpointUri);

			assert(isEmitted);
		})
	})

	describe('#response()', () => {
		it('should emit a "loudmouth-log-response" event', () => {
			let emitter = new EventEmitter();
			let isEmitted = false;
			const log = new Logger(emitter);
			emitter.on(listeners.events.responseListener, () => {
				isEmitted = true;
			})

			log.response(200, endpointUri, requestType.GET);

			assert(isEmitted);
		})
	})
})