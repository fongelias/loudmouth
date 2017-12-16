# loudmouth
Telemetry module for Node

## Design

Initialize Client
Client listens for loudmouth events
Logger emits loudmouth events


### Client
Event listener with a one time setup. Listens for event 'loudmouth-log'. Sends it to a passed url with an optional API key argument.

### Logger
Event emitter that emits event 'loudmouth-log'. Takes in an object as an argument to emit with the logging event, passing it to the client's to send.

Each trace event has a log level
Each request event has a request type, endpoint uri 
Each response type has a response code, endpoint uri






