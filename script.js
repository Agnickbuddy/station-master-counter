let count = 0;
function incrementCount() {
  count++;
  console.log(count);
  let countElement = document.getElementById("people-count");
  if (countElement) {
    countElement.textContent = count.toString();
  }
  if (count === 1) {
    document.getElementById("increment-btn").textContent = "Click";
  }
}
function resetCount() {
  count = 0;
  console.log(count);
  let countElement = document.getElementById("people-count");
  if (countElement) {
    countElement.textContent = count.toString();
  }
  document.getElementById("increment-btn").textContent = "Click";
}