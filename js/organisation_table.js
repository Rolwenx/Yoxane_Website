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
    var button =addCart[i]
    button.addEventListener("click",addCartClicked)  //assingning the button to add the items
  }

}

function removeCartItem(event){
  var ButtonClicked =event.target  //adding the remove event
  ButtonClicked.parentElement.remove()  //when the button clicked, we call the function remove
}


function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('title-drawing')[0].innerText;
  var ProductImage = shopProducts.getElementsByClassName("dessin")[0].src;
  addDrawing(title, ProductImage);
}

function addDrawing(title, ProductImage) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add('cart-box');
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      return;
    }
  }
  var cartBoxContent = `
    <img src="${ProductImage}" alt="Image 1" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
    </div>
    <i class='bx bxs-trash-alt remove'></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox.getElementsByClassName("remove")[0].addEventListener("click", removeCartItem);
}
