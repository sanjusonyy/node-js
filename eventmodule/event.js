// event module
// node.js has a built in modile called events
// where you can create fire and listen for your events
//  registering for the event to be firect only one time using once
// create an event emitter instance and register a couple of callbacks
// registering for the event with callback parameters

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName",()=>{
    console.log("My name is sanjeev");
});
event.on("sayMyName",()=>{
    console.log("My name is mamta");
});
event.on("sayMyName",()=>{
    console.log("My name is rinki");
});
event.on("checkPage",(sc, msg)=>{    //registering for the event with callback parameters
    console.log(`status code is ${sc} and the message is ${msg}`);
});
event.emit("sayMyName");
event.emit("checkPage","200", "ok");



// the concept is quite simple: emitter objects emit named events that 
// cause previously registered listerners to be called.so, an emitter object 
// basically has two main features :
// emitter name events.
// registering and unregistering listener function.


