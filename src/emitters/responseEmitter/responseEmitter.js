import { EventEmitter } from 'events';

import { listeners } from '../../config';

export function responseEmitter(emitter, status, requestType, endpointUri, body = "") {
	if(!(emitter instanceof EventEmitter)) {
		throw new Error('responseEmitter: emitter argument is not an instance of EventEmitter');
	}

	emitter.emit(listeners.events.responseListener, {
		status,
		requestType,
		endpointUri: encodeURI(endpointUri),
		body: encodeURI(body),
	});
}