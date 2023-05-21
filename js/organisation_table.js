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
