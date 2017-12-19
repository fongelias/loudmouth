import assert from 'assert';

import { EventEmitter } from 'events';

import { listeners, requestType } from '../../config';

import { responseEmitter } from './responseEmitter';

describe('responseEmitter()', () => {

	const endpointUri = "/sample/uri";
	const body = "Sample message";
	const status = 200;

	it('should emit a "loudmouth-log-response" event', () => {
		const emitter = new EventEmitter();
		let isEmitted = false;
		emitter.on(listeners.events.responseListener, () => { isEmitted = true; });

		responseEmitter(emitter, status, requestType.GET, endpointUri, body);

		assert(isEmitted);
	});

	it('should send an argument object with a status', () => {
		const emitter = new EventEmitter();
		let hasStatus = false;
		emitter.on(listeners.events.responseListener, (argObj) => { 
			hasStatus = argObj.status ? true : false; 
		});

		responseEmitter(emitter, status, requestType.GET, endpointUri, body);

		assert(hasStatus);
	})

	it('should send an argument object with a request type', () => {
		const emitter = new EventEmitter();
		let hasRequestType = false;
		emitter.on(listeners.events.responseListener, (argObj) => { 
			hasRequestType = argObj.requestType ? true : false; 
		});

		responseEmitter(emitter, status, requestType.GET, endpointUri, body);

		assert(hasRequestType);
	})

	it('should send an argument object containing a uri', () => {
		const emitter = new EventEmitter();
		let hasUri = false;
		emitter.on(listeners.events.responseListener, (argObj) => { 
			hasUri = argObj.endpointUri ? true : false; 
		});

		responseEmitter(emitter, status, requestType.GET, endpointUri, body);

		assert(hasUri);
	})

	it('should send an argument object containing a body', () => {
		const emitter = new EventEmitter();
		let hasBody = false;
		emitter.on(listeners.events.responseListener, (argObj) => { 
			hasBody = argObj.body ? true : false; 
		});

		responseEmitter(emitter, status, requestType.GET, endpointUri, body);

		assert(hasBody);
	})



});