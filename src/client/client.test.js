import assert from 'assert';
import { EventEmitter } from 'events';
import { URL } from 'url';

import { listeners } from '../config';

import { LoudmouthClient } from './client';

describe('LoudmouthClient class', () => {
	describe('#constructor()', () => {

		const url = new URL('https://www.sampleUrl.com/');
		const appName = "";

		const loudmouth = new LoudmouthClient(url, appName);

		it('should add an eventEmitter as a member', () => {
			assert(loudmouth.emitter instanceof EventEmitter);
		});

		it('should add a traceListener to the EventEmitter', () => {
			assert(loudmouth.emitter.listenerCount(listeners.events.traceListener) == 1);
		});

		it('should add a requestListener to the EventEmitter', () => {
			assert(loudmouth.emitter.listenerCount(listeners.events.requestListener) == 1);
		});

		it('should add a responseListener to the EventEmitter', () => {
			assert(loudmouth.emitter.listenerCount(listeners.events.responseListener) == 1);
		});
	})
})