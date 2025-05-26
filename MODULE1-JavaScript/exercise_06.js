let events = [];

events.push({ name: "Cooking Class", type: "Workshop" });
events.push({ name: "Jazz Night", type: "Music" });

let musicEvents = events.filter(evt => evt.type === "Music");

let eventCards = events.map(evt => `Event: ${evt.name}`);
console.log(eventCards);