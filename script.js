// funzioni bottone Calcolo
var calculateBtn = document.getElementById("calculate");

// evento da scatenare al click del button calculate
calculateBtn.addEventListener("click", function(){
  var burgerName = document.getElementById("burger-name").value;

  if(burgerName.length < 1){ // istruzioni se non inserisco valore

    alert("inserisci nome panino")

  } else {

    var checkboxes = document.getElementsByClassName("ingred");
    var price = 10;
    // console.log("ingredienti",checkboxes);
    for(var i=0;i<checkboxes.length;i++){ //istruzioni per vedere ingred checked
      var checkbox = checkboxes[i];
      // console.log(checkbox);
      var isChecked = checkbox.checked;

      if(isChecked){ // aumento del prezzo in base a ingredienti checked
        price = price + parseInt(checkbox.dataset.price);
      }
      // console.log(checkbox,isChecked,price);
    }

    // calcolo sconto coupon
    var coupons = ["mucca","pecora","cane","gatto"];
    var couponValue = document.getElementById("coupon").value;
    for(i=0;i<coupons.length;i++){
      var coupon = coupons[i];
      if(couponValue == coupons[i]){
        price = price*0.8;
      }
    }

    document.getElementById("price").innerHTML = price;

  }

})
