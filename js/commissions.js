// Functionality allowing us to open a popup to make a commission, as well as close it
document.addEventListener("DOMContentLoaded", function() {

    // FOR BOX 1
    var openBtn = document.getElementById("openPopup");
    var closeBtn = document.querySelector(".closePopup");
    var popup = document.querySelector(".popup");
  
    openBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.add("open");
    });
  
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.remove("open");
    });
  
    function SendAlertMessageSent() {
      alert("Your commission has been sent. Yoke or Roxane will confirm your commission shortly.");
      popup.classList.remove("open");
    }

    // FOR BOX 2
    var openBtn = document.getElementById("openPopup2");
    var closeBtn = document.querySelector(".closePopup");
    var popup = document.querySelector(".popup");
  
    openBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.add("open");
    });
  
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.remove("open");
    });
  
    function SendAlertMessageSent() {
      alert("Your commission has been sent. Yoke or Roxane will confirm your commission shortly.");
      popup.classList.remove("open");
    }

    // FOR BOX 3
    var openBtn = document.getElementById("openPopup3");
    var closeBtn = document.querySelector(".closePopup");
    var popup = document.querySelector(".popup");
  
    openBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.add("open");
    });
  
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.remove("open");
    });
  
    function SendAlertMessageSent() {
      alert("Your commission has been sent. Yoke or Roxane will confirm your commission shortly.");
      popup.classList.remove("open");
    }

    // FOR BOX 4
    var openBtn = document.getElementById("openPopup4");
    var closeBtn = document.querySelector(".closePopup");
    var popup = document.querySelector(".popup");
  
    openBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.add("open");
    });
  
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.remove("open");
    });
  
    function SendAlertMessageSent() {
      alert("Your commission has been sent. Yoke or Roxane will confirm your commission shortly.");
      popup.classList.remove("open");
    }

    // FOR BOX 5
    var openBtn = document.getElementById("openPopup5");
    var closeBtn = document.querySelector(".closePopup");
    var popup = document.querySelector(".popup");
  
    openBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.add("open");
    });
  
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.remove("open");
    });
  
    function SendAlertMessageSent() {
      alert("Your commission has been sent. Yoke or Roxane will confirm your commission shortly.");
      popup.classList.remove("open");
    }
  
    // We check if all fields are filled before sending the message
    const submitButton = document.querySelector(".submit_form");
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      const usernameInput = document.querySelector('input[name="username"]');
      const emailInput = document.querySelector('input[name="email"]');
      const typeInput = document.querySelector('select[name="type"]');
      const messageInput = document.querySelector('textarea[name="message"]');
  
      if (usernameInput.value === "" || emailInput.value === "" || messageInput.value === "" || typeInput.value === "") {
        alert("Please fill in all the required fields before sending the message.");
        return;
      } else {
        SendAlertMessageSent();
      }
    });
  });
  