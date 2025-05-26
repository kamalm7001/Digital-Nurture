const container = document.querySelector("#events");

function addEventCard(name) {
  const card = document.createElement("div");
  card.textContent = name;
  container.appendChild(card);
}