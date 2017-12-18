import { URL } from 'url';
import { EventEmitter } from 'events';

import { 
	addRequestListener, 
	addResponseListener, 
	addTraceListener, 
} from '../listeners';



export class LoudmouthClient {
	constructor(url, appName, apiKey = "") {
		//Adding members of class
		if(url instanceof URL) {
			this.url = url;
		} else if(typeof url == 'string') {
			this.url = new URL(url);
		} else {
			throw new Error('loudmouthClient: url supplied in constructor is not a string or instance of URL');
		}

		if(typeof appName == 'string') {
			this.appName = appName;
		} else {
			throw new Error('loudmouthClient: appName supplied in constructor is not a string');
		}

		if(typeof apiKey == 'string') {
			this.apiKey = apiKey;
		} else {
			throw new Error('loudmouthClient: apiKey supplied in constructor is not a string');
		}

		this.emitter = new EventEmitter();
		//add listeners
		addTraceListener(this.emitter, this.url, this.appName, this.apiKey);
		addRequestListener(this.emitter, this.url, this.appName, this.apiKey);
		addResponseListener(this.emitter, this.url, this.appName, this.apiKey);
	}
}