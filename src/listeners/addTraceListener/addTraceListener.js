import { EventEmitter } from 'events';


import { listeners } from '../../config';
import { sendTelemetry } from '../../requests';

/** 
function to add a listener for trace events that sends telemetry
@param {EventEmitter} emitter - the event emitter used by the client to manage loudmouth related events
@param {URL} url - a url object
@param {string} appName - the name of the application sending telemetry
@param {string} apiKey - the api key used to access the url
*/
export function addTraceListener(emitter, url, appName, apiKey) {
	//console.log('addTraceListener');
	//Type Check
	if(!(emitter instanceof EventEmitter)) {
		throw new Error('addTraceListener: argument is not an EventEmitter');
	}

	emitter.on(listeners.events.traceListener, (args) => {
		sendTelemetry(url, appName, args, apiKey);
	})
}