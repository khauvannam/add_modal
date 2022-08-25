"use strict";
const showModals = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const show = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const hidden = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
for (const showModal of showModals) {
  showModal.addEventListener("click", show);
}
closeModal.addEventListener("click", hidden);
overlay.addEventListener("click", hidden);
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) hidden();
});
