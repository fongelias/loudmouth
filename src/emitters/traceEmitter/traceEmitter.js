import { EventEmitter } from 'events';

import { listeners } from '../../config';

export function traceEmitter(emitter, logLevel, body = "") {
	if(!(emitter instanceof EventEmitter)) {
		throw new Error('traceEmitter: emitter argument is not an instance of EventEmitter');
	}

	emitter.emit(listeners.events.traceListener, {
		logLevel,
		time: new Date(),
		body: encodeURI(body),
	});
}