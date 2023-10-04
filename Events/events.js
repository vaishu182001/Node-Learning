const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (data) => {
    console.log('Custom event received with data:', data);
  });
  myEmitter.once('onceEvent', () => {
    console.log('This event listener will execute only once.');
  });  

// Emit a custom event
myEmitter.emit('customEvent', 'Event data');

//removing a custom listerner
function myListener() {
    console.log('Listener is called.');
  }
  
  myEmitter.on('customEvent', myListener);
  
  // Remove the listener
  myEmitter.removeListener('customEvent', myListener);
  