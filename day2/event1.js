//.once is async funtion which lets event emmit once
//.listenerCount gives number of event count

import EventEmitter from "events";

let emitter = new EventEmitter();

emitter.once('some-event', () =>{
    console.log('it only executes once.');
})

console.log(emitter);


emitter.emit('some-event');
// emitter.emit('some-event');

console.log(emitter.listenerCount('some-event'));



