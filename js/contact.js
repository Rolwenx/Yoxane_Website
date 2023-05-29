// JAVASCRIPT: adds a focus class when the user is selecting a field
// And we remove it when the user isn't


document.addEventListener("DOMContentLoaded", function() {
    // We select all our elements having the class "input"
    const inputs = document.querySelectorAll(".input");
    console.log(inputs);

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
  });
  
