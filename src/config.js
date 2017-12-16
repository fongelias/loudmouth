const eventPrefix = 'loudmouth';
const loggingEventPrefix = eventPrefix + '-' + 'log';




export const listeners = {
	events: {
		traceListener: loggingEventPrefix + '-' + 'trace',
		responseListener: loggingEventPrefix + '-' + 'response',
		requestListener: loggingEventPrefix + '-' + 'request',
	},
};
