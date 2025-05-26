function addEvent(name, date, category) {
  return { name, date, category };
}

function registerUser(event) {
  console.log("User registered for", event.name);
}

function filterEventsByCategory(events, category) {
  return events.filter(evt => evt.category === category);
}

function createCategoryCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}