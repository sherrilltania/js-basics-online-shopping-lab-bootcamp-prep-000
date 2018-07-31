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

 function removeFromCart(item){
   for(var i = 0, l = cart.length; i < l; i++){
   for(var list in cart[i]){
      if(item === list){
        cart.splice(i,1)
        return cart
       }
    }
  }
   console.log("That item is not in your cart.")
  return cart
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
