import assert from 'assert';
import proxyquire from 'proxyquire';
import { URL } from 'url';


import { sendTelemetry } from './sendTelemetry';


describe('sendTelemetry()', () => {

	const url = new URL("https://www.sampleUrl.com/");
	const appName = "appNameString";


	it('should throw an error if the url argument is not a url object', () => {
		let errorThrown = false;
		const notUrl = "";

		try {
			sendTelemetry(notUrl, appName).catch(()=>true);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	})

	it('should throw an error if the appName argument is not a string', () => {
		let errorThrown = false;
		let notString = 5
		try {
			sendTelemetry(url, notString).catch(()=>true);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	})

	it('should return a promise', () => {
		assert(sendTelemetry(url, appName).catch(()=>true) instanceof Promise);
	})
})