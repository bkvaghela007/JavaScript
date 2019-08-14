import {eventObseraver}  from './Observable';

// Arrange
const observer = new eventObseraver();

let subscriberHasBeenCalled = false;
const fn = (data) => subscriberHasBeenCalled = data;

observer.subscribe(fn);

// Act
observer.broadcast(true);

// Assert
assert(subscriberHasBeenCalled);
