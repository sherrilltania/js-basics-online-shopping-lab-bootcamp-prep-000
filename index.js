var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
var price = Math.floor(Math.random()* 100)+1
var itemObj = { itemName: item,
                itemPrice: price}
cart.push(itemObj)
console.log("${item} has been added to your cart.")
return cart
 }

 function viewCart (){
   var newCart = [];
   for(var i = 0; i < cart.length; i ++){
     newCart.push("${cart[i][item]} at $${cart[i][price]}")
     if(cart.length === 1){
     console.log("In your cart, you have " + newCart + ".")
   }

   else if(cart.length === 2){
     console.log("In your cart, you have" + newCart.join("and ") + ".")
   }
   else if(cart.length > 2){
     console.log("In your cart, you have" + newCart.slice(0, -1).join(", ") + ", and " + newCart.slice(-1))
   }
   else if (cart.length === 0){
     console.log("Your shopping cart is empty.")
   }
 }
   return newCart;
}
/* The total() function accepts no arguments, iterates through the cart array,
and returns the current total value of the items in the cart.*/
function total(){
  var totalValue = 0;
  for( var i = 0; i < cart.length; i ++){
    totalValue = totalValue + cart[i].price;
  }
  return totalValue;
}
/* The removeFromCart() function accepts one argument, the name of the item that should be
removed.
If the item is present in the cart, the function should remove the object from the cart and
then return the updated cart.
HINT: Check each object's itemName value key to see if it matches the parameter,
then remove it if it matches. You might find Array.prototype.splice() to be useful.
If the cart does not contain a matching item, the function should return That item is not in
your cart.*/
 function removeFromCart(item){
   for(var i = 0; i < cart.length; i ++){
     for(var list in cart[i]){
        if(item === list){
          cart.splice(i,1)
          
        } else if (item !=== list){
          console.log("That item is not in your cart.")
        }
        return cart;
      }
   }
 }

   
  
 function placeOrder(cardNumber) {
 if (cardNumber === undefined){
  console.log("We don't have a credit card on file for you to place your order.")
}
else{
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
}
 }
