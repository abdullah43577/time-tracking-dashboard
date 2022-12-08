"use strict";
import jsonData from "./data.json" assert { type: "json" };

const daily = document.querySelector(".second_sect > :first-child");
const weekly = document.querySelector(".second_sect > :nth-child(2)");
const monthly = document.querySelector(".second_sect > :nth-child(3)");
const current = document.querySelectorAll("div.main > h2");
const previous = document.querySelectorAll("div.main > p");

daily.addEventListener("click", () => {
  activeClassToggler();
  activeClassAdd(daily);
  // daily DOM manipulation
  jsonData.forEach((data, i) => {
    current[i].textContent = `${jsonData[i].timeframes.daily.current}hrs`;
    //previous days
    previous[
      i
    ].textContent = `Last Week - ${jsonData[i].timeframes.daily.previous}hrs`;
  });
});

weekly.addEventListener("click", () => {
  activeClassToggler();
  activeClassAdd(weekly);
  // Weekly Dom manipulation
  jsonData.forEach((data, i) => {
    current[i].textContent = `${jsonData[i].timeframes.weekly.current}hrs`;

    //previous days
    previous[
      i
    ].textContent = `Last Week - ${jsonData[i].timeframes.weekly.previous}hrs`;
  });
});

monthly.addEventListener("click", () => {
  activeClassToggler();
  activeClassAdd(monthly);
  // Monthly Dom manipulation
  jsonData.forEach((data, i) => {
    current[i].textContent = `${jsonData[i].timeframes.monthly.current}hrs`;

    //previous days
    previous[
      i
    ].textContent = `Last Week - ${jsonData[i].timeframes.monthly.previous}hrs`;
  });
});

function activeClassToggler() {
  const daysData = document.querySelectorAll(".days");
  daysData.forEach((day) => {
    if (day.classList.contains("activeDay")) day.classList.remove("activeDay");
  });
}

function activeClassAdd(parameter) {
  parameter.classList.add("activeDay");
}
