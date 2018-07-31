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
   for(var i = 0; i < cart.length; i ++){
     console.log("In your cart, you have ${cart.length[i][item]} at ${cart.length[i][price]}")
   }

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
