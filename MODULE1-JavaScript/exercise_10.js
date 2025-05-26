function showDetails({ name, date }) {
  console.log(`${name} is on ${date}`);
}

const eventList = [{ name: "Yoga", date: "2025-09-01" }];
const newList = [...eventList];

showDetails(newList[0]);