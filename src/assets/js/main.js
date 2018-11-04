function myFunction() {
  document.body.style.backgroundColor = "red";
}
// API Pricing Section

(function() {
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  	// handle successfully request / response
    if (this.readyState == 4 && this.status == 200) {
     let plans = JSON.parse(this.responseText);
     // responsed plans from backend contains both monthly and annually plans, hence it is good practices to classify them into 2 difference arrays
     let monthlyPlans = plans.filter(plan => plan.interval === 'monthly');
     let annuallyPlans = plans.filter(plan => plan.interval === 'annually');
     
     // After classifying, binding back to HTML element
     // There are some fields need to be binded:
     // - currencySymbol: our system supports difference currencies, we detect currency based on their IP address on backend, therefore currencySymbol needs to be used from responsed data
     // - pricing: difference currency has difference pricing
     // - jobCredit: the number of posted jobs customer will be able to use once they subscribe
     
     let pricingCardTitles = document.getElementsByClassName('pricing-card-title');
     // pricingCardTitles expects to have the same length as classified plans above
     for (let i = 0; i < pricingCardTitles.length; ++ i) {
     		// update its corresponding HTML
     		pricingCardTitles[i].innerHTML = monthlyPlans[i].currencySymbol + monthlyPlans[i].pricing + ' <small class="text-muted">/ mo</small>';   
     }
    }
  };
  xhttp.open("GET", "https://api.talent-ninja.com/plans", true);
  xhttp.send();
})();

// FILTERS
filterSelection("signup")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "signup") c = "signup";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn4");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}