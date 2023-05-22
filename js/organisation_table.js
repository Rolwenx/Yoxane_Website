// Get all images in the table
function selection_rox(){
    const images = document.querySelectorAll('#img_container img');
    images.forEach(img => {
        if (!img.classList.contains('roxane')) {
        img.parentElement.style.display = 'none';
        } else {
        img.parentElement.style.display = 'grid';
        }
    });
    };


function selection_all(){
  const container = document.querySelector('#img_container');
  const images = container.querySelectorAll('img');
  images.forEach(img => {
    img.parentElement.style.display = 'grid';
  });
}

function selection_yo(){
    const images = document.querySelectorAll('#img_container img');
    images.forEach(img => {
        if (!img.classList.contains('yoke')) {
        img.parentElement.style.display = 'none';
        } else {
        img.parentElement.style.display = 'grid';
        }
    });
};



// Allow us to open and close the cart
function Open() {
  // Get the .cart element
  let cart = document.querySelector(".cart");
  // Add the class 'active' to the .cart element
  cart.classList.add("active")
}

function Quit(){
  let cart =document.querySelector(".cart");  
  cart.classList.remove("active")

}


//implementing the cart's contain
if (document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded',ready); //veirfy if the page is loead, if its still loeading, it wait when the document object model is finish to load an call the function ready()
}
else{
  ready();
}

function ready(){
  //remove item
  var removeCartButtons = document.getElementsByClassName('remove')  //store all element with the class .remove
  for (var i=0;i < removeCartButtons.length; i++){   //iterate through all the elements in the array 
    var button = removeCartButtons[i]  
    button.addEventListener('click', removeCartItem)  //assingning the button to remove the items
  }

  //add to cart
  var addCart = document.getElementsByClassName('add-cart')  //will store all elements with the casll .add-cart
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

function removeCartItem(event){
  var ButtonClicked =event.target  //adding the remove event
  ButtonClicked.parentElement.remove()  //when the button clicked, we call the function remove
  updateTotalPrice() 

}


function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('title-drawing')[0].innerText;
  var price =shopProducts.getElementsByClassName('price')[0].innerText;
  var ProductImage = shopProducts.getElementsByClassName("dessin")[0].src;
  addDrawing(title, ProductImage, price);
}

function addDrawing(title, ProductImage,price) {
  var cartShopBox = document.createElement("div");  //create a new element 
  cartShopBox.classList.add('cart-box');  //Add to the class cart-box
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("This drawing is already in the cart!");
          return;
    }
  }


  //tell the prgm how to add a box content
  var cartBoxContent = `
  <img src="${ProductImage}" alt="Image 1" class="cart-img"> 
  <div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <span class="price" data-price="${price}">${price}</span>
  <input class="cart-quantity-input" type="number" value="1">
  </div>
  <i class='bx bxs-trash-alt remove'></i>`;


  cartShopBox.innerHTML = cartBoxContent;
  cartShopBox.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
  cartItems.append(cartShopBox);
  updateTotalPrice();
  cartShopBox.getElementsByClassName("remove")[0].addEventListener("click", removeCartItem);
}

function quantityChanged(event) {
  var input = event.target;
  var priceElement = input.parentElement.getElementsByClassName("price")[0];
  var price = parseFloat(priceElement.getAttribute("data-price").replace("€", ""));
  var quantity = input.value;
  var total = price * quantity;
  priceElement.innerText = total + "€";
  
  updateTotalPrice(); 
}

function updateTotalPrice() {
  var total = 0;
  var cartItems = document.getElementsByClassName('cart-content')[0].getElementsByClassName('cart-box');
  console.log(cartItems)
  for (var i = 0; i < cartItems.length; i++) {
    var priceElement = cartItems[i].querySelector('.price');
    console.log(priceElement)
    var quantityElement = cartItems[i].querySelector('.cart-quantity-input');
    var price = parseFloat(priceElement.dataset.price);
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  document.querySelector('.cart-total-price').innerText = total + '€';
}



function Open_old_orders() {
  console.log("haha")
  // Get the .cart element
  let order = document.querySelector(".ancienne-commandes");
  console.log(order)
  // Add the class 'active' to the .cart element
  order.classList.add("active")
}

function Close_old_orders() {
  console.log("haha")
  // Get the .cart element
  let order = document.querySelector(".ancienne-commandes");
  console.log(order)
  // Add the class 'active' to the .cart element
  order.classList.remove("active");
}

let commandCount = 0; // Keep track of the number of commands
function buy() {
  let form =createForm();
  Open_formulaire();

  let cartContent = document.querySelector(".cart-content");

  let titles = [];
  let titleElements = document.querySelectorAll('.cart-product-title');
  titleElements.forEach(function (element) {
      titles.push(element.textContent);
  });
  let pastOrders=titles;
  console.log(pastOrders)

  let list = document.createElement('ul');
  list.style.display = "none";
  pastOrders.forEach(function (item) {
      let li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
  });

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values of the form fields
    let nom = document.querySelector('#nom').value;
    let prenom = document.querySelector('#prenom').value;
    let telephone = document.querySelector('#telephone').value;
    let email = document.querySelector('#email').value;
    
    // Create a new element to display the coordinates
    let coordinatesElement = document.createElement('div');
    coordinatesElement.innerHTML = `
    My data : <br>
      Nom: ${nom}; 
      Prénom: ${prenom};
      Téléphone: ${telephone};
      Email: ${email}
    `;
      list.appendChild(coordinatesElement);

      while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotalPrice();
    Close_formulaire()
  });
   
  // Get the cart element and the list of old command
  let oldCommands = document.querySelector(".ancienne-commandes");
    let newCommand = document.createElement("li");
    let commandText = document.createElement("span");
    commandText.textContent = "Command " + commandCount;
    newCommand.appendChild(commandText);
    newCommand.appendChild(list);
    newCommand.addEventListener("click", function() {
      if (list.style.display === "none") {
          list.style.display = "block";
      } else {
          list.style.display = "none";
      }
  });
  commandCount++;
  oldCommands.appendChild(newCommand);
  updateTotalPrice();
}

//create the form 
function createForm() {
  let formbox = document.getElementsByClassName('formulaire')[0];
  let form = document.createElement('form');
  
  let labelNom = document.createElement('label');
  labelNom.setAttribute('for', 'nom');
  labelNom.textContent = 'Nom:';
  form.appendChild(labelNom);
  
  let inputNom = document.createElement('input');
  inputNom.setAttribute('type', 'text');
  inputNom.setAttribute('id', 'nom');
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
  form.appendChild(inputPrenom);
  
  let labelTelephone = document.createElement('label');
  labelTelephone.setAttribute('for', 'telephone');
  labelTelephone.textContent = 'Téléphone:';
  form.appendChild(labelTelephone);
  
  let inputTelephone = document.createElement('input');
  inputTelephone.setAttribute('type', 'text');
  inputTelephone.setAttribute('id', 'telephone');
  inputTelephone.setAttribute('name', 'telephone');
  form.appendChild(inputTelephone);
  
  let labelEmail = document.createElement('label');
  labelEmail.setAttribute('for', 'email');
  labelEmail.textContent = 'Email:';
  form.appendChild(labelEmail);
  
  let inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('id', 'email');
  inputEmail.setAttribute('name', 'email');
  form.appendChild(inputEmail);
  
  let submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit');
  form.appendChild(submitButton);
  
  formbox.appendChild(form);
  
  return form;
}

function Open_formulaire() {
  console.log("haha form")
  // Get the .cart element
  let form = document.querySelector(".formulaire");
  // Add the class 'active' to the .cart element
  form.classList.add("active")
}

function Close_formulaire() {
  console.log("haha")
  // Get the .cart element
  let form = document.querySelector(".formulaire");
  // Add the class 'active' to the .cart element
  form.classList.remove("active");
}


