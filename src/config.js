const eventPrefix = 'loudmouth';
const loggingEventPrefix = eventPrefix + '-' + 'log';




export const listeners = {
	events: {
		traceListener: loggingEventPrefix + '-' + 'trace',
		responseListener: loggingEventPrefix + '-' + 'response',
		requestListener: loggingEventPrefix + '-' + 'request',
	},
};

//Enums
export const requestType = {
	GET: "GET",
	HEAD: "HEAD",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
	CONNECT: "CONNECT",
	OPTIONS: "OPTIONS",
	TRACE: "TRACE",
	PATCH: "PATCH",
};

export const logLevel = {
	INFO: "INFO",
	DEBUG: "DEBUG",
	ERROR: "ERROR",
};



