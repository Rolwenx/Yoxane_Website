document.addEventListener("DOMContentLoaded", function() {

  /* -------------------- Functionality allowing us to open a popup 
  to make a commission, as well as close it ---------------------------*/

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
      alert("Your commission has been added. Check the commissions table to see if it has been added.");
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

  
    // We check if all fields are filled before sending the message
    const submitButton = document.querySelector(".submit_form");
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      const usernameInput = document.querySelector('input[name="username"]');
      const emailInput = document.querySelector('input[name="email"]');
      const typeInput = document.querySelector('select[name="type"]');
      const messageInput = document.querySelector('textarea[name="message"]');
      const artistInput = document.querySelector('select[name="type_artist"]');
      console.log(usernameInput + emailInput + messageInput + artistInput);
  
      if (usernameInput.value === "" || emailInput.value === "" || messageInput.value === "" || typeInput.value === "" || artistInput.value === "") {
        alert("Please fill in all the required fields before sending the message.");
        return;
      } else {
        SendAlertMessageSent();
      
        addTableCommission();
      }
    });


    /* -------------------- Functionality allowing us to fill the commission table 
  thanks to the inputs entered in the popup box  ---------------------------*/
  function addTableCommission(){
    var popup_form = document.forms.commission_form;
    var new_line = document.createElement ("tr");
    var artist_col = document.createElement ("td")
    var username_col = document.createElement ("td");
    var commissions_date_col = document.createElement ("td");
    var email_col = document.createElement ("td");
    var type_col = document.createElement ("td");
    var details_order_col = document.createElement ("td");


    var commissions_table = document.getElementById("commissions_table");
    artist_col.textContent = popup_form.elements["artist_select"].value;
    username_col.textContent = popup_form.elements["username"].value;
    commissions_date_col.textContent = popup_form.elements["username"].value;
    email_col.textContent = popup_form.elements["email"].value;
    type_col.textContent = popup_form.elements["type_select"].value;;
    details_order_col.textContent = popup_form.elements["details_order"].value;;

    new_line.appendChild(artist_col);
    new_line.appendChild(username_col);
    new_line.appendChild(commissions_date_col);
    new_line.appendChild(email_col);
    new_line.appendChild(type_col);
    new_line.appendChild(details_order_col);
    console.log(new_line);
    commissions_table.appendChild(new_line);

    // Clear form fields
  const usernameInput = document.querySelector('input[name="username"]');
  const emailInput = document.querySelector('input[name="email"]');
  const typeInput = document.querySelector('select[name="type"]');
  const artistInput = document.querySelector('select[name="type_artist"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  
  usernameInput.value = "";
  emailInput.value = "";
  typeInput.value = "";
  messageInput.value = "";
  artistInput.value= "";
  }



  




  });