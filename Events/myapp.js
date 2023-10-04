//In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.
//ode.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners
const EventEmitter = require('events');

// Create a custom TrafficLight class that extends EventEmitter
class TrafficLight extends EventEmitter {
  constructor() {
    super();
    this.color = 'red'; // Initial traffic light color
  }

  changeColor() {
    setInterval(() => {
      switch (this.color) {
        case 'red':
          this.color = 'green';
          this.emit('change', this.color);
          break;
        case 'green':
          this.color = 'yellow';
          this.emit('change', this.color);
          break;
        case 'yellow':
          this.color = 'red';
          this.emit('change', this.color);
          break;
      }
    }, 2000); // Change color every 2 seconds
  }
}

// Create an instance of the TrafficLight class
const trafficLight = new TrafficLight();

// Add event listeners for the 'change' event
trafficLight.on('change', (color) => {
  console.log(`Traffic light changed to ${color}`);
});

// Start the traffic light simulation
trafficLight.changeColor();

