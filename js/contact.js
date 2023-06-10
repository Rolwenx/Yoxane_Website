document.addEventListener("DOMContentLoaded", function() {

  // FUNCTIONALITY: adds a focus class when the user is selecting a field, remove when don't

  // We select all our elements having the class "input"
  const inputs = document.querySelectorAll(".input");
  /*When the input is focused by the user, we select its parent
  (the .input_field) and we add a focus to it (which will make
  the label go above the input field)*/
  function focus_Function(){

      let parent = this.parentNode;
      parent.classList.add("focus");
  }
  // Now we define a focus that de-focus when input not selected
  function defocus_Function(){
      let parent = this.parentNode;
      // We want to de-focus only if no input has been entered
      if(this.value == ""){
          parent.classList.remove("focus");
      }
  }
  inputs.forEach((input) => {
      input.addEventListener("focus", focus_Function);
      input.addEventListener("blur", defocus_Function);
  });


  // FUNCTIONALITY: Popup Message
  const submitButton = document.querySelector(".submit_button");
  let popup_box = document.getElementsByClassName("popup_message")[0];
  
  submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      const usernameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const reasonInput = document.querySelector('select[name="reason"]');
      const messageInput = document.querySelector('textarea[name="message"]');
      const phoneInput = document.querySelector('input[name="phone"]');
  
      if (usernameInput.value === "" || emailInput.value === "" || messageInput.value === "" || reasonInput.value === "") {
        alert("Please fill in all the required fields before sending the message.");
        return;
      } 
      else if (!emailInput.value.endsWith("@gmail.com") && !emailInput.value.endsWith("@yopmail.com") && !emailInput.value.endsWith("@yahoo.fr") && !emailInput.value.endsWith("@outlook.com") && !emailInput.value.endsWith("@efrei.net")) {
        alert("Please enter a valid email address that ends with @gmail.com, @yopmail.com or @yahoo.fr.");
        return;
      }
      else if (phoneInput.value !== "" && !/^0[167]\d{8}$/.test(phoneInput.value)) {
        alert("Please enter a valid phone number that starts with 06, 07 or 01 and contains 10 digits.");
        return;
      }
      else {
        popupAppears(event);
      }
    });

    // FUNCTIONALITY: When user clicks "Send Message", a popup appears

    function popupAppears(event){
        // To prevent the default refresh of page
        event.preventDefault();

        popup_box.classList.add("open_popup");
    }

    const submit = document.querySelector(".popup_message button");
    submit.addEventListener("click", popupDisappears);
  
    // ...
  
    function popupDisappears() {
      popup_box.classList.remove("open_popup");

      // Reset form fields
      const form = document.querySelector(".contact_form form");
      form.reset();

    }
  


});
