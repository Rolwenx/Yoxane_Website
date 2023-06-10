/*--------HERE WE DEFINE ALL THE FUNCTION FOR THE SELECTION IN SHOP ---------------*/

function selection_rox(){
  const images = document.querySelectorAll('.image-container img');

  images.forEach(img => {
      if (!img.classList.contains('roxane')) {
        img.closest('.image-container').style.display = 'none'; //if the image has to ne class roxane, then it will not be displayed
      } else {
        img.closest('.image-container').style.display = 'grid';
      }
  });
  };

function selection_fanart(){
  const images = document.querySelectorAll('.image-container img');
  images.forEach(img => {
      if (!img.classList.contains('fanart')) {
        img.closest('.image-container').style.display = 'none';
      } else {
        img.closest('.image-container').style.display = 'grid';
      }
  });
};

function selection_tradi(){
  const images = document.querySelectorAll('.image-container img');
  images.forEach(img => {
      if (!img.classList.contains('traditional')) {
        img.closest('.image-container').style.display = 'none';
      } else {
        img.closest('.image-container').style.display = 'grid';
      }
  });
};


function selection_paint(){
  const images = document.querySelectorAll('.image-container img');
  images.forEach(img => {
      if (!img.classList.contains('painting')) {
        img.closest('.image-container').style.display = 'none';
      } else {
        img.closest('.image-container').style.display = 'grid';
      }
  });
};


function selection_yo(){
  const images = document.querySelectorAll('.image-container img');
  images.forEach(img => {
      if (!img.classList.contains('yoke')) {
        img.closest('.image-container').style.display = 'none';
      } else {
        img.closest('.image-container').style.display = 'grid';
      }
  });
};


function selection_all(){
const container = document.querySelector('.image-container').parentElement; 
const images = container.querySelectorAll('img');
images.forEach(img => {
  img.closest('.image-container').style.display = 'grid';
});
}




//HERE WE ADD THE NAME OF THE ARTIST ACCORDING TO ITS NAME
document.addEventListener('DOMContentLoaded', function() {
  let imageContainers = document.querySelectorAll('.image-container');
  imageContainers.forEach(function(container) {// Iterate over each image-container element
    
    let img = container.querySelector('img');// Get the img element inside the container

    let src = img.getAttribute('src');// Get the src attribute of the img element
    if (src.includes('yoke')) {// Check if the src contains 'yoke' or 'roxane'
      // Check if the artist's name has already been added
      if (!container.querySelector('.artist')) {
        let artistElement = document.createElement('div');// Create a new element to display the artist's name
        artistElement.classList.add('artist');
        artistElement.textContent = 'Artist: Nolwen';
        container.appendChild(artistElement);
      }
    } else if (src.includes('roxane')) {
      // Check if the artist's name has already been added
      if (!container.querySelector('.artist')) {
        let artistElement = document.createElement('div');// Create a new element to display the artist's name
        artistElement.classList.add('artist');
        artistElement.textContent = 'Artist: Enaxor';
        container.appendChild(artistElement);
      }
    }
  });
});



/*--------THESE FUNFCTION WILL ALLOW US TO OPEN AND CLOSE A WINDOW OPEN OR CLOSE --------------*/

function Open() {
let cart = document.querySelector(".cart");
cart.classList.add("active")
}

function Quit(){
let cart =document.querySelector(".cart");  
cart.classList.remove("active")
}

function Open_form() {
  console.log("haha form")
  // Get the .cart element
  let form = document.querySelector(".form_order");
  // Add the class 'active' to the .cart element
  form.classList.add("active")
}

//function to quit the form
function Quit_form() {
console.log("quit")

let form = document.querySelector(".form_order");
let form_container = document.getElementsByTagName("form_container")[0];
if (form_container) {
  form_container.remove();
}
form.classList.remove("active");
}
  

//fonction to submit the form
function Submit_form() {
  let form = document.querySelector(".form_order");
  let form_container = document.getElementsByTagName("form_container")[0];
  if (form_container) {
    form_container.remove(); //We delete each time the 
  }
  form.classList.remove("active");
}

  





/*--------- IMPLEMENTING THE CART CONTAIN -------------*/

if (document.readyState=='loading'){
 document.addEventListener('DOMContentLoaded',ready); //veirfy if the page is load, if its still loeading, it wait when the document object model is finish to load an call the function ready()
}
else{
 ready();
}

function ready(){

  //REmove from cart
  var removeCartButtons = document.getElementsByClassName('remove')  //store all element with the class .remove
  for (var i=0;i < removeCartButtons.length; i++){   //iterate through all the elements in the array 
    var button = removeCartButtons[i]  
    button.addEventListener('click', removeCartItem)  //assingning the button to remove the items
  }

  //add to cart
  var addCart = document.getElementsByClassName('add-cart')  //will store all elements with the class .add-cart
  for (var i =0; i< addCart.length; i++){
    var button = addCart[i]
    button.addEventListener("click",addCartClicked)  //assingning the button to add the items
  }

  var quantity = document.getElementsByClassName("cart-quantity-input");
  for(var i = 0; i < quantity.length; i++){
    var input = quantity[i];
    input.addEventListener('change',quantityChanged);
  }

}

//function to remove from the cart
function removeCartItem(event){
  var ButtonClicked = event.target  //adding the remove event
  ButtonClicked.parentElement.remove()  //when the button clicked, we call the function remove
  updateTotalPrice() //we update the total price

}


function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.closest('.image-container');
  var title = shopProducts.getElementsByClassName('title-drawing')[0].innerText; //We keep the title of the drawing, the price and its image
  var price = shopProducts.getElementsByClassName('price')[0].innerText;
  var ProductImage = shopProducts.getElementsByClassName('drawing')[0].src;
  addDrawing(title, ProductImage, price); //and then we add it to the cart
}


function addDrawing(title, ProductImage,price) {
  var cartShopBox = document.createElement("div");  //create a new element in order to stock the image, the price and the title
  cartShopBox.classList.add('cart-box');  //Add to the class cart-box
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) { 
    if (cartItemsNames[i].innerText == title) { //It verifies if the drawing is already in the cart, if yes, it will displayed a message
      alert("This drawing is already in the cart!");
          return;
    }
  }

  //tell the prgm in which form we want to add the drawing into the cart
  var cartBoxContent = `
  <img src="${ProductImage}" alt="Image 1" class="cart-img"> 
  <div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <span class="price-cart" data-price="${price}">${price}</span>
  <input class="cart-quantity-input" type="number" value="1">
  </div>
  <i class='bx bxs-trash-alt remove'></i>`;


  cartShopBox.innerHTML = cartBoxContent;
  cartShopBox.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
  cartItems.append(cartShopBox);
  updateTotalPrice();
  cartShopBox.getElementsByClassName("remove")[0].addEventListener("click", removeCartItem);
}


//Function to change the quantity and the price at the same time
function quantityChanged(event) {
  var input = event.target;
  var priceElement = input.parentElement.getElementsByClassName("price-cart")[0];
  var price = parseFloat(priceElement.getAttribute("data-price").replace("€", ""));
  var quantity = input.value;
  var total = price * quantity;
  priceElement.innerText = total + "€";
  updateTotalPrice(); 
}


//This function will update the total price of our cart
function updateTotalPrice() {
  var total = 0;
  var cartItems = document.getElementsByClassName('cart-content')[0].getElementsByClassName('cart-box');
  console.log(cartItems)
  for (var i = 0; i < cartItems.length; i++) {
    var priceElement = cartItems[i].querySelector('.price-cart');
    console.log(priceElement)
    var quantityElement = cartItems[i].querySelector('.cart-quantity-input');
    var price = parseFloat(priceElement.dataset.price);
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  document.querySelector('.cart-total-price').innerText = total + '€';
  return total;
}


//When we want to buy, the function will verify if the cart is empty or not
function verif_cart(){
  var cartItems = document.getElementsByClassName('cart-content')[0].getElementsByClassName('cart-box');
  console.log(cartItems.length)
  if(cartItems.length==0){
    alert("Your cart is empty");
    return;
  }
  else {
    buy();
  }

}



/*------------------- IMPLEMENTING OF THE BUYING ACTION -------------------*/

function buy() {
  //We will create the form each time 
  let form = document.querySelector('.form_order form');
  form = createForm();
  Open_form();

  let cartContent = document.querySelector(".cart-content");
  let cartItems = cartContent.querySelectorAll(".cart-box");
  let pastOrders = JSON.parse(localStorage.getItem('pastOrders')) || []; //We create a table in order to stock our command in a local storage

  let currentOrder = [];
  //For each of the itemps, we keep its informations
  cartItems.forEach(function (item) {
    var title = item.querySelector('.cart-product-title').textContent;
    var price = item.querySelector('.price-cart').dataset.price;
    var quantity = item.querySelector('.cart-quantity-input').value;
    var imageSrc = item.querySelector('.cart-img').src;
    currentOrder.push({title, price, quantity, imageSrc});
  });
  pastOrders.push(currentOrder); //We add our current order into the oldest
  localStorage.setItem('pastOrders', JSON.stringify(pastOrders));

  // Add a submit event listener to the form
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values of the form fields
    let nom = document.querySelector('#nom').value;
    let prenom = document.querySelector('#prenom').value;
    let telephone = document.querySelector('#telephone').value;
    let email = document.querySelector('#email').value;
    var total = updateTotalPrice();


    //We validate each input of the user
    if (!nom || !prenom || !telephone || !email) {
      alert('Please fill in all the fields.');
      return;
    }
    if (/[a-zA-Z]/.test(telephone)) {
      alert('Invalid telephone number. The number must not contain any letters.');
      return;
    }
    if (!/^0[167]\d{8}$/.test(telephone)) {
      alert('Invalid telephone number. The number must start with 06, 07 or 01 and contain a total of 10 digits.');
      return;
    }
    if (!/@gmail\.com$|@yopmail\.com$|@yahoo\.fr$|@hotmail\.fr$|@outlook\.com$/.test(email)) {
      alert('Invalid email. The email must be a Gmail, Yopmail, Yahoo, Hotmail or Outlook address.');
      return;
    }

    //We create a new line with new rows
    var new_line = document.createElement ("tr");
    var drawing_col = document.createElement ("td")
    var total_col = document.createElement ("td");
    var name_col = document.createElement ("td");
    var firstname_col = document.createElement ("td");
    var email_col = document.createElement ("td");
    var tel_col = document.createElement ("td");

    // Add the drawing information to the first cell
    let drawingText = '';
    currentOrder.forEach(function(item) {
      drawingText += `${item.title} x ${item.quantity}<br>`;
    });
    drawing_col.innerHTML = drawingText;

    // Add the total price to the second cell
    let totalPrice = currentOrder.reduce(function(total, item) {
      return total + (item.price * item.quantity);
    }, 0);
    let totalString = total + "€";

    total_col.textContent = totalString;
    name_col.textContent = nom;
    firstname_col.textContent = prenom;
    email_col.textContent = email;
    tel_col.textContent = telephone;

    new_line.appendChild(drawing_col);
    new_line.appendChild(total_col);
    new_line.appendChild(name_col);
    new_line.appendChild(firstname_col);
    new_line.appendChild(email_col);
    new_line.appendChild(tel_col);

    // Create a new row in the table
    let table = document.getElementById('order_table');
    table.appendChild(new_line);
    // Store the data in local storage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({
      drawing: drawingText,
      total: totalString,
      name: nom,
      firstname: prenom,
      email: email,
      telephone: telephone
    });
    localStorage.setItem('orders', JSON.stringify(orders));

    while (cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
    }
    
    updateTotalPrice();
    Submit_form();
  });

  updateTotalPrice();
}


//create the form 
function createForm() {

let formbox = document.getElementsByClassName('form_order')[0];
let form_container = document.createElement('form_container');
let form = document.createElement('form');

let labelForm = document.createElement('h2');
labelForm.textContent = "Enter your informations";
form_container.appendChild(labelForm)

let labelNom = document.createElement('label');
labelNom.setAttribute('for', 'nom');
labelNom.textContent = 'Nom:';
form.appendChild(labelNom);

let inputNom = document.createElement('input');
inputNom.setAttribute('type', 'text');
inputNom.setAttribute('id', 'nom');
inputNom.placeholder ="Name..."
inputNom.setAttribute('name', 'nom');
form.appendChild(inputNom);

let labelPrenom = document.createElement('label');
labelPrenom.setAttribute('for', 'prenom');
labelPrenom.textContent = 'Prénom:';
form.appendChild(labelPrenom);

let inputPrenom = document.createElement('input');
inputPrenom.setAttribute('type', 'text');
inputPrenom.setAttribute('id', 'prenom');
inputPrenom.setAttribute('name', 'prenom');
inputPrenom.placeholder ="Firstname..."
form.appendChild(inputPrenom);

let labelTelephone = document.createElement('label');
labelTelephone.setAttribute('for', 'telephone');
labelTelephone.textContent = 'Téléphone:';
form.appendChild(labelTelephone);

let inputTelephone = document.createElement('input');
inputTelephone.setAttribute('type', 'text');
inputTelephone.setAttribute('id', 'telephone');
inputTelephone.setAttribute('name', 'telephone');
inputTelephone.placeholder ="Phone number..."
form.appendChild(inputTelephone);

let labelEmail = document.createElement('label');
labelEmail.setAttribute('for', 'email');
labelEmail.textContent = 'Email:';
form.appendChild(labelEmail);

let inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'text');
inputEmail.setAttribute('id', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.placeholder ="Email..."
form.appendChild(inputEmail);

let submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Submit');
form.appendChild(submitButton);

form_container.appendChild(form)
formbox.appendChild(form_container);

return formbox;
}

//This will display the orders we done in the past
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the data from local storage
  let orders = JSON.parse(localStorage.getItem('orders')) || [];

  // Get a reference to the table
  let table = document.getElementById('order_table');

  // Add a row to the table for each order
  orders.forEach(function(order) {
    let newRow = table.insertRow(-1);

    let drawingCell = newRow.insertCell(0);
    drawingCell.innerHTML = order.drawing;

    let totalCell = newRow.insertCell(1);
    totalCell.textContent = order.total;

    let nameCell = newRow.insertCell(2);
    nameCell.textContent = order.name;

    let firstnameCell = newRow.insertCell(3);
    firstnameCell.textContent = order.firstname;

    let emailCell = newRow.insertCell(4);
    emailCell.textContent = order.email;

    let telCell = newRow.insertCell(5);
    telCell.textContent = order.telephone;
  });
});



