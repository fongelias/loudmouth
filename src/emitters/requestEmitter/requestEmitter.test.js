import assert from 'assert';

import { EventEmitter } from 'events';

import { listeners, requestType } from '../../config';

import { requestEmitter } from './requestEmitter';

describe('requestEmitter()', () => {

	const endpointUri = "/sample/uri";
	const body = "Sample message"

	it('should emit a "loudmouth-log-request" event', () => {
		const emitter = new EventEmitter();
		let isEmitted = false;
		emitter.on(listeners.events.requestListener, () => { isEmitted = true; });

		requestEmitter(emitter, requestType.GET, endpointUri, body);

		assert(isEmitted);
	});

	it('should send an argument object with a request type', () => {
		const emitter = new EventEmitter();
		let hasRequestType = false;
		emitter.on(listeners.events.requestListener, (argObj) => { 
			hasRequestType = argObj.requestType ? true : false; 
		});

		requestEmitter(emitter, requestType.GET, endpointUri, body);

		assert(hasRequestType);
	})

	it('should send an argument object containing a uri', () => {
		const emitter = new EventEmitter();
		let hasUri = false;
		emitter.on(listeners.events.requestListener, (argObj) => { 
			hasUri = argObj.endpointUri ? true : false; 
		});

		requestEmitter(emitter, requestType.GET, endpointUri, body);

		assert(hasUri);
	})

	it('should send an argument object containing a body', () => {
		const emitter = new EventEmitter();
		let hasBody = false;
		emitter.on(listeners.events.requestListener, (argObj) => { 
			hasBody = argObj.body ? true : false; 
		});

		requestEmitter(emitter, requestType.GET, endpointUri, body);

		assert(hasBody);
	})

});