"use strict";

$(document).ready(
  $("#parties-btn-1").animate({ opacity: "1", left: "0" }, 1000),
  $("#parties-btn-2").animate({ opacity: "1", right: "0" }, 1500),
  $("#parties-btn-3").animate({ opacity: "1", left: "0" }, 2000),

  $("#mobile-hr-1").animate({ opacity: "0.3", left: "0" }, 1000),
  $("#mobile-hr-2").animate({ opacity: "0.3", right: "0" }, 1500),
  $("#mobile-hr-3").animate({ opacity: "0.3", left: "0" }, 2000)
);

var bigImage = $(".big-image");

$(".kit-image").click(function () {
  var kitImage = $(this).attr("src");
  bigImage.attr("src", kitImage);
});

//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const succesMessage = document.getElementById("success");

const contactForm = document.querySelector(".contact-form");

let firstName = document.getElementById("FName");
let lastName = document.getElementById("LName");
let email = document.getElementById("email");
let date = document.getElementById("date");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    date: date.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == "Success") {
      contactForm.classList.add("hidden");
      succesMessage.classList.remove("hidden");
    } else {
      alert("Something went wrong!");
    }
  };
  xhr.send(JSON.stringify(formData));
});
