
document.addEventListener("DOMContentLoaded", function() {

  var mydata = JSON.parse(data);
      for(var i = 0; i < mydata.length; i++){
        ajouter_json(mydata[i].Wanted_Artist, mydata[i].Username, mydata[i].Deadline, mydata[i].Email,mydata[i].Type_of_Commissions,mydata[i].Details_about_order);
      }

      /* -------------------- Functionality allowing us to open a popup 
  to make a commission, as well as close it ---------------------------*/

    // FOR BOX 1
    var openBtn = document.getElementById("openPopup");
    var closeBtn = document.querySelector(".closePopup");
    var popup = document.querySelector(".popup");
  
    openBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.add("open");
      // Set the default value for the input field
      var inputField = popup.querySelector('select[name="type"]');
      inputField.value = "Traditional";
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
      // Set the default value for the input field
      var inputField = popup.querySelector('select[name="type"]');
      inputField.value = "Painting";
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
      // Set the default value for the input field
      var inputField = popup.querySelector('select[name="type"]');
      inputField.value = "Sketch";
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
      // Set the default value for the input field
      var inputField = popup.querySelector('select[name="type"]');
      inputField.value = "Line Art";
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
      // Set the default value for the input field
      var inputField = popup.querySelector('select[name="type"]');
      inputField.value = "Full Digital";
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
    const dateInput = document.querySelector('input[name="date_limit"]');

    if (usernameInput.value === "" || emailInput.value === "" || messageInput.value === "" 
    || typeInput.value === "" || artistInput.value === "" || dateInput.value === "") {
      alert("Please fill in all the required fields before sending the message.");
      return;
    } else {
      SendAlertMessageSent();
      addTableCommission();
    }
  });
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
  commissions_date_col.textContent = popup_form.elements["date_limit"].value;
  email_col.textContent = "*******";
  type_col.textContent = popup_form.elements["type_select"].value;
  details_order_col.textContent = popup_form.elements["details_order"].value;

  new_line.appendChild(artist_col);
  new_line.appendChild(username_col);
  new_line.appendChild(commissions_date_col);
  new_line.appendChild(email_col);
  new_line.appendChild(type_col);
  new_line.appendChild(details_order_col);
  console.log(new_line);
  commissions_table.appendChild(new_line);

  // we call CommissionSaisi() to get user input and create Commission object
  const Commission_object = CommissionSaisi(popup_form.elements["details_order"].value);
  console.log(Commission_object);

  // we call pushPWD() to append the Commission object to the array
  pushCommissions(Commission_object);

   // We display the array
   console.log(my_commissions)


  // Clear form fields
  const usernameInput = document.querySelector('input[name="username"]');
  const emailInput = document.querySelector('input[name="email"]');
  const typeInput = document.querySelector('select[name="type"]');
  const artistInput = document.querySelector('select[name="type_artist"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const dateInput = document.querySelector('input[name="date_limit"]');
  
  usernameInput.value = "";
  emailInput.value = "";
  typeInput.value = "";
  messageInput.value = "";
  artistInput= "";
  dateInput="";
}

// STORAGE OF THE PREVIOUSLY ADDED COMMISSIONS

  function CommissionSaisi(commission_details) {
    var username = (document.querySelector('input[name="username"]')).value;
    //var email = (document.querySelector('input[name="email"]')).value;
    var email = "*******";
    var type_commission = (document.querySelector('select[name="type"]')).value;
    var wanted_artist = (document.querySelector('select[name="type_artist"]')).value;
    var date_limit = (document.querySelector('input[name="date_limit"]')).value;

    const NewCommission = new Commissions(wanted_artist, username, date_limit, email, type_commission, commission_details);

    return NewCommission;
  }

const my_commissions = [];
function pushCommissions(commissions_details) {
    my_commissions.push(commissions_details);
    let objLine = JSON.stringify(my_commissions);
    localStorage.setItem("commissions", objLine);
}

function historyCommissions(){
  console.log("Last Commissions ");
  let objLinea = localStorage.getItem("commissions");
  console.log(objLinea) ;
  console.log(typeof(objLinea));
  const tab = JSON.parse(objLinea);
  for (var i = 0; i < tab.length; i++) {
    ajouter_json(tab[i].wanted_artist, tab[i].username, tab[i].date_limit, tab[i].email,tab[i].type_commission,tab[i].details );
  }
}

class Commissions {

constructor(wanted_artist, username, date_limit, email, type_commission, details) {
this.wanted_artist = wanted_artist;
this.username = username;
this.date_limit = date_limit;
this.email = email;
this.type_commission = type_commission;
this.details = details;
}

}

function ajouter_json(artist, username,date_limit, email, type, details){
  var new_line = document.createElement("tr");
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  var col4 = document.createElement("td");
  var col5 = document.createElement("td");
  var col6 = document.createElement("td");

  col1.textContent = artist;
  col2.textContent = username;
  col3.textContent = date_limit;
  col4.textContent = email;
  col5.textContent = type;
  col6.textContent = details;
  
  table_data = document.querySelector('#commissions_table');
  new_line.appendChild(col1);
  new_line.appendChild(col2);
  new_line.appendChild(col3);
  new_line.appendChild(col4);
  new_line.appendChild(col5);
  new_line.appendChild(col6);
  table_data.appendChild(new_line);
  
}

  // This will be use to make that if someone clicks on the see more commissions,
  // He can't click it anymore (it will only display same thing so no use)
  var Commission_history_Button = document.getElementById('commissions_history_button');
  var rememberInfo = document.getElementById('remember_commissions');

  Commission_history_Button.addEventListener('click', function() {
    rememberInfo.style.display = 'block';  // Show the remembered information
    Commission_history_Button.disabled = true;  // Disable the button
});
