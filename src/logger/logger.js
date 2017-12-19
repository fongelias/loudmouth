import { EventEmitter } from 'events';

import { listeners, requestType, logLevel } from '../config';

import { traceEmitter, requestEmitter, responseEmitter } from '../emitters';


export class Logger {
	constructor(emitter) {
		if(emitter instanceof EventEmitter) {
			this.emitter = emitter;
		} else {
			throw new Error('Logger: emitter argument is not an EventEmitter');
		}
	}

	info(body) {
		traceEmitter(this.emitter, logLevel.INFO, body);
	}

	debug(body) {
		traceEmitter(this.emitter, logLevel.DEBUG, body);
	}

	error(body) {
		traceEmitter(this.emitter, logLevel.ERROR, body);
	}

	getRequest(endpointUri, body) {
		requestEmitter(this.emitter, requestType.GET, endpointUri, body);
	}

	postRequest(endpointUri, body) {
		requestEmitter(this.emitter, requestType.POST, endpointUri, body);
	}

	putRequest(endpointUri, body) {
		requestEmitter(this.emitter, requestType.PUT, endpointUri, body);
	}

	deleteRequest(endpointUri, body) {
		requestEmitter(this.emitter, requestType.DELETE, endpointUri, body);
	}

	response(status, endpointUri, requestType, body) {
		responseEmitter(this.emitter, status, endpointUri, requestType, body);
	}
}