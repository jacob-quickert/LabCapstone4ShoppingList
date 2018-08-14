var itemsForPurchase = [];
var itemPrices = [];
var sum = 0;

function addItem(itemName, price){

 itemPrices.push(price);
  var checkoutBox = document.getElementById('checkout');
  checkoutBox.innerHTML += "<p>" + itemName + " $" + price + ".00" + "</p>";

}

function sumTotal (){
  for(var i = 0; i < itemPrices.length; i++){
    sum += itemPrices[i];

  }
}

function totalMyPrices (){
  sumTotal();
var totalBox = document.getElementById("total");
totalBox.textContent = "Total: $" + sum + ".00";

}
