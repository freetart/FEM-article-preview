"use strict";

const popup = () => {
  const shareBtn = document.querySelector(".share-btn");
  const popupEl = document.querySelector(".popup");
  const popupText = document.querySelector(".popuptext");

  shareBtn.addEventListener("click", () => {
    popupEl.classList.toggle("show");
    popupText.classList.toggle("show");
  });
};
popup();
