// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const priceVal = price.innerHTML;
  const quantity = product.querySelector(".quantity input");
  const quantValue = quantity.value;
  let subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = Number(priceVal * quantValue);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  const singleProduct2 = document.querySelector(".product2");
  updateSubtotal(singleProduct2);
  // ITERATION 3
  let total = document.querySelector("#total-value span");
  const subTotalProd1 = document.querySelector(".product .subtotal span");
  const subTotalProd2 = document.querySelector(".product2 .subtotal span");
  total.innerText =
    Number(subTotalProd1.innerText) + Number(subTotalProd2.innerText);
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
});
