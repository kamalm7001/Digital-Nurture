const eventsList = [
  { name: "Music Fest", date: "2025-07-01", seats: 10 },
  { name: "Past Talk", date: "2023-05-01", seats: 0 }
];

eventsList.forEach(eventItem => {
  if (new Date(eventItem.date) > new Date() && eventItem.seats > 0) {
    console.log("Upcoming Event:", eventItem.name);
  }
});

function registerUser(event) {
  try {
    if (event.seats > 0) {
      event.seats--;
      console.log("Registered:", event.name);
    } else {
      throw "No seats left";
    }
  } catch (err) {
    console.error(err);
  }
}