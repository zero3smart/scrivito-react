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