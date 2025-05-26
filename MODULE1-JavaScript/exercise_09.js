fetch("events.json")
  .then(res => res.json())
  .then(data => {
    console.log("Events:", data);
  })
  .catch(err => console.error(err));

async function loadEvents() {
  document.querySelector("#loader").style.display = "block";
  try {
    const res = await fetch("events.json");
    const data = await res.json();
    console.log("Async Events:", data);
  } finally {
    document.querySelector("#loader").style.display = "none";
  }
}