const alertBox = document.querySelector(".alert-box");
const prevButton = document.querySelector(".perv-message");
const nextButton = document.querySelector(".next-message");
const alertMessageArray = [
  "WE ARE SOLD OUT - THANK YOU FOR YOUR SUPPORT",
  "SIZE GUIDE : Mia- M , Kourosh- L , Iman- XL",
  "FREE SHIPPING ON CANADIAN ORDERS ABOVE $100",
];
let indexArray = 0;

const showAlert = () => {
  const alertMessage = alertBox.querySelector(".alert-message");
  alertMessage.style.opacity = 0;
  setTimeout(() => {
    alertMessage.innerHTML = alertMessageArray[indexArray];
    alertMessage.style.opacity = 1;
  }, 300);
};

let intervalId = setInterval(() => {
  indexArray = (indexArray + 1) % alertMessageArray.length;
  showAlert();
}, 6000);

const nextMessage = () => {
  indexArray = (indexArray + 1) % alertMessageArray.length;
  showAlert();
};

const prevMessage = () => {
  indexArray =
    (indexArray - 1 + alertMessageArray.length) % alertMessageArray.length;
  showAlert();
};

prevButton.addEventListener("click", prevMessage);
nextButton.addEventListener("click", nextMessage);

document.addEventListener("DOMContentLoaded", showAlert());
