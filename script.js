"use strict"; // enforces strict mode in javascript ✅

window.addEventListener("DOMContentLoaded", start); // when the page is loaded, run the function start 💯

function start() {
  console.log("JavaScript kører"); // 💯
  hideAll(); // first hide all  💯
  askAboutName(); // then ask about name 💯
} // 💯

function hideAll() {
  document.querySelector("#ask-name").classList.add("hide"); 
  document.querySelector("#ask-age").classList.add("hide");
  document.querySelector("#ask-birthyear").classList.add("hide");
  document.querySelector("#success").classList.add("hide");
  document.querySelector("#failure").classList.add("hide"); // 💯
} // hides all the forms with a css class called hide that has visibility: hidden; 💯

function fillInFields(fieldname, value) {
  document.querySelectorAll(`[data-field=${fieldname}]`).forEach(element => (element.textContent = value)); // for each so that every element is changed // 💯
} // this function fills in the data-fields with a given name and value // 💯

function askAboutName() {
  const form = document.querySelector("#ask-name"); // 💯
  form.addEventListener("submit", answeredName); // 💯
  form.classList.remove("hide"); // removes the css class hide from the form with the id ask-name
}

function answeredName(event) {
  event.preventDefault(); // prevents the page from reloading

  const form = event.target; // 💯
  form.removeEventListener("submit", answeredName); // 💯
  form.querySelector("button").disabled = true; // 💯

  const firstname = form.firstname.value; // 💯
  console.log("Answered name: " + firstname); // 💯

  fillInFields("firstname", firstname); // 💯

  askAboutAge(); // 💯
}

function askAboutAge() {
  const form = document.querySelector("#ask-age"); // 💯
  form.addEventListener("submit", answeredAge); // 💯
  form.classList.remove("hide"); // 💯
}

function answeredAge(event) {
  event.preventDefault(); // 💯

  const form = event.target; // 💯
  form.removeEventListener("submit", answeredAge); // 💯
  form.querySelector("button").disabled = true; // 💯

  const age = form.age.valueAsNumber; // 💯
  console.log("Answered age: " + age); // 💯

  fillInFields("age", age); // not working since there is no data-field="age" in the HTML 

  askAboutBirthYear(age); // 💯
}

function askAboutBirthYear(age) {
  // calculate birthyear - expect that the person HASN'T had their birthday yet this year
  const birthyear = 2024 - 1 - age; // 💯

  fillInFields("birthyear", birthyear); // 💯
  // Name is already filled in due to the function being called before with name

  const form = document.querySelector("#ask-birthyear"); // 💯
  form.addEventListener("submit", answeredBirthyear); // 💯
  form.classList.remove("hide"); // 💯
}

function answeredBirthyear(event) {
  event.preventDefault(); // 💯
 
  const form = event.target; // 💯
  form.removeEventListener("submit", answeredBirthyear); // 💯
  form.querySelector("button").disabled = true; // 💯

  const correct = form.correct.value; // 💯
  console.log("Answered correct: " + correct); // 💯

  if (correct === "yes") { // determines which answer to show // 💯
    showSuccess(); // 💯
  } else {
    showFailure(); // 💯
  }
}

function showSuccess() {
  document.querySelector("#success").classList.remove("hide"); // 💯
}

function showFailure() {
  document.querySelector("#failure").classList.remove("hide"); // 💯
}
