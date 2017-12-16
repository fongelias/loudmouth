import { EventEmitter } from 'events';


import { listeners } from '../../config';


export function addTraceListener(emitter, url, apiKey, appName) {
	console.log('addTraceListener');
	//Type Check
	if(!(emitter instanceof EventEmitter)) {
		throw new Error('addTraceListener: argument is not an EventEmitter');
	}

	emitter.on(listeners.events.traceListener, () => {
		console.log('hey');
		//https.request() function here
	})
}