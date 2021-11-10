window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
// Q: is the + how you add to an object?
// A: makes it a numerical value that can then be used in math



// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}
// why do we need to declare these twice in 2 different ways? Is it that when you do the getElementById, you're only accessing the element and not the input? couuld you do it in one line, like - const amountUI = document.getElementById("loan-amount").value?
// A: we're setting the default values that appear when the screen loads



// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}
// Q: Don't get this - calling a function with another function as the argument, with another function as the argument for that one?
// A: we're not passing in the function exactly - we're passing in what's returned from the function, which is a number
// Q: Also does it not matter that updateMonthly and calculateMonthlyPayment haven't been declared yet? They first apper below here.
// A: in some languages that would matter, but in JS it doesn't



// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}
// Q: Is the code using const so much because the variables are going to be used in multiple functions? Basically, why const over let in general? I know const means constant and the value can't be changed.
// A: If you know it won't be changed then using const is a solid idea. One reason being that if something unexpected happens, you'll get an error



// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
// Q: monthly doesn't seem to be declared anywhere, shouldn't that equation at the end of the previous be returned as a variable?
// A: monthly is what you're passing into the function, don't have to declare it