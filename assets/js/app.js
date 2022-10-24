let buyBtns = document.querySelectorAll(".add-cart");
// console.log(buyBtns);

buyBtns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let quantityTotal = document.querySelector(".quantity-total-cart");
    console.log(quantityTotal.innerText); //"0" 0
    // quantityTotal.innerText =Number(quantityTotal.innerText)+ 1;
    ++quantityTotal.innerText;
    // quantityTotal.textContent
  });
});
