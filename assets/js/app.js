let buyBtns = document.querySelectorAll(".add-cart");
// console.log(buyBtns);

buyBtns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let quantityTotal = document.querySelector(".quantity-total-cart");
    console.log(quantityTotal.innerText); //"0" 0
    // quantityTotal.innerText =Number(quantityTotal.innerText)+ 1;
    ++quantityTotal.innerText;
    // quantityTotal.textContent
    let itemCart = `<li id="1">
                        <a href="#">
                             <img src="assets/images/products/1.jpg" alt="product" />
                             <div class="proprties-cart">
                                 <span class="item-title">Samsung S10</span>
                                 <span class="item-price">10000 KR</span>
                                 <span class="quantity-item">1</span>
                             </div>
                        </a>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </li>`;

    document.querySelector(".items").innerHTML += itemCart;
    document.querySelector(".empty-cart").style.display = "none";
  });
});
