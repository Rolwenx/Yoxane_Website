

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
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const usernameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const reasonInput = document.querySelector('select[name="reason"]');
        const messageInput = document.querySelector('textarea[name="message"]');
    
        if (usernameInput.value === "" || emailInput.value === "" || messageInput.value === "" || reasonInput.value === "") {
          alert("Please fill in all the required fields before sending the message.");
          return;
        } else {
          popupAppears(event);
        }
      });

    });