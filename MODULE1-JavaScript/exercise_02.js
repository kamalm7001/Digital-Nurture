const eventName = "Community Meetup";
const eventDate = "2025-06-10";
let availableSeats = 30;

let info = `${eventName} on ${eventDate} has ${availableSeats} seats`;
console.log(info);

availableSeats--;
console.log("Seats left:", availableSeats);