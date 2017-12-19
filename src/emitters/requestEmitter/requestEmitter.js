import { EventEmitter } from 'events';

import { listeners } from '../../config';

export function requestEmitter(emitter, requestType, endpointUri, body = "") {
	if(!(emitter instanceof EventEmitter)) {
		throw new Error('requestEmitter: emitter argument is not an instance of EventEmitter');
	}

	emitter.emit(listeners.events.requestListener, {
		requestType,
		endpointUri: encodeURI(endpointUri),
		body: encodeURI(body),
	});
}