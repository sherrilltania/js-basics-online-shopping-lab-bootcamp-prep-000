var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
      var newObject= {};
        newObject[item]=Math.floor(Math.random()*100);

     cart.push(newObject)
      console.log(`${item} has been added to your cart.`);
      return cart;

    }

    function viewCart() {
     var sentence_starter = "In your cart, you have";
     var cart_list = [];
     
    cart.forEach(function(item) {
       for(var key in item){
           cart_list.push(`${key} at $${item[key]}`)
       }
    });
          if(cart_list.length===0){
            console.log("Your shopping cart is empty.")
          }
         else if(cart_list.length == 1){
         console.log(`${sentence_starter} ${cart_list}.`);
          }
          else if(cart_list.length ==2){
            console.log(`${sentence_starter} ${cart_list[0]} and ${cart_list[1]}.`);
          }
          else if(cart_list.length>=3){
            cart_list[cart_list.length-1]= "and "+cart_list[cart_list.length-1];
            console.log(`${sentence_starter} ${cart_list.join(", ")}.`);
          }
       
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

        } else if (item !== list){
          console.log("That item is not in your cart.")
        }
        return cart;
      }
   }
 }

/* The placeOrder() function accepts one argument, a credit card number.
If no argument is received, the function should print out Sorry, we don't have a credit card on file for you..
If a card number is received, the function should
empty the cart array
return Your total cost is $71, which will be charged to the card 83296759. (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder())*/

 function placeOrder(cardNumber) {
 if (cardNumber === undefined){
  console.log("Sorry, we don't have a credit card on file for you.")
}
else{
   console.log("Your total cost is $${total()}, which will be charged to the card ${cardNumber}.")
  cart = [];
  return cart;
}
 }
