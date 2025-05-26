document.querySelectorAll(".register-btn").forEach(btn => {
  btn.onclick = function () {
    alert("Registered!");
  };
});

document.querySelector("#category").onchange = function (e) {
  console.log("Filter:", e.target.value);
};

document.querySelector("#search").onkeydown = function (e) {
  console.log("Key pressed:", e.key);
};