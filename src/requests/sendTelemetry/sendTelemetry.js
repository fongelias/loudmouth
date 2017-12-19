import https from 'https';
import { URL } from 'url';

/** 
https request wrapper for sending telemetry
@param {URL} url - a url object
@param {string} appName - the name of the application sending telemetry
@param {string} apiKey - the api key used to access the url
@return {Promise} requestPromise - a promise that resolves on the completion of the request
*/
export function sendTelemetry(url, appName, body, apiKey) {

	//argument check
	if(!(url instanceof URL)) {
		throw new Error('sendTelemetry: url argument is not a URL object');
	}

	if(typeof appName != 'string') {
		throw new Error('sendTelemetry: appName argument is not a string');
	}


	return new Promise((resolve, reject) => {

		const requestOptions = {
			protocol: url.protocol,
			hostname: url.hostname,
			path: url.path,
			method: 'POST',
			auth: apiKey, //TODO Review this later
			headers: { //TODO Review this later
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}

		https.request(requestOptions, (res) => {
			//TODO: test if we dont need to wait for the end event
			res.on('end', () => {
				if(res.statusCode != 200) {
					reject(res);
				} else {
					resolve(res);
				}
			})

			res.resume();
		}).on('error', (e) => {
			reject(e.message);
		}).end();
	});
}


