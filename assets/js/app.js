let buyBtns = document.querySelectorAll(".add-cart");
// console.log(buyBtns);

//synchronous vs asynchronous(js):
//

buyBtns.forEach(function (item) {
  item.addEventListener("click", function (event) {
    // console.log(event);
    const product = event.target.parentElement; //parent of button clicked
    // console.log(product);

    const titleP = product.querySelector(".t-product").innerText;
    const imageP = product.querySelector("img").src;
    const priceP = product.querySelector(".price-product").innerText;
    const idP = product.id;

    let quantityTotal = document.querySelector(".quantity-total-cart");
    // quantityTotal.innerText =Number(quantityTotal.innerText)+ 1;
    ++quantityTotal.innerText;
    // quantityTotal.textContent

    if (document.getElementById(`cart-${idP}`) == null) {
      let itemCart = `<li id="cart-${idP}">
                        <a href="#">
                             <img src=${imageP} alt="product" />
                             <div class="proprties-cart">
                                 <span class="item-title">${titleP}</span>
                                 <span class="item-price">${priceP}</span>
                                 <span class="quantity-item">1</span>
                             </div>
                        </a>
                        <i class="fa fa-trash remove-item-cart" aria-hidden="true"></i>
                    </li>`;

      document.querySelector(".items").innerHTML += itemCart;
      let removeItemsCart = document.querySelectorAll(".remove-item-cart");

      removeItemsCart.forEach(function (item) {
        item.addEventListener("click", function (e) {
          console.log("hello");
          let qty =
            e.target.parentElement.querySelector(".quantity-item").innerText;
          //   let qty = itemC.querySelector(".quantity-item").innerText;

          quantityTotal.innerText = quantityTotal.innerText - qty;
          // quantityTotal.innerText -= qtyP;

          if (quantityTotal.innerText == 0) {
            document.querySelector(".empty-cart").style.display = "block";
          }
          e.target.parentElement.remove();
        });
      });
    } else {
      let qtyItemCart = document
        .getElementById(`cart-${idP}`)
        .querySelector(".quantity-item");

      ++qtyItemCart.innerText;
    }

    document.querySelector(".empty-cart").style.display = "none";
  });
});

let addToFavs = document.querySelectorAll(".add-to-fav"); // list of add-to-fav

addToFavs.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    let product = e.target.parentElement;
    let qtyf = 0;
    let id = product.id; //1, 2, 3, 4
    let titleP = product.querySelector(".t-product").innerText;
    let priceP = product.querySelector(".price-product").innerText;
    const imageP = product.querySelector("img").src;
    let qtyTotalFav = document.querySelector(".quantity-total-favs");
    ++qtyTotalFav.innerText;

    if (document.getElementById(`fav-${id}`) == null) {
      let itemFav = `<li id="fav-${id}">
                        <a class="fav-item" href="">
                             <img src=${imageP} alt="product" />
                             <div class="proprties-fav">
                                 <span class="title-fav">${titleP}</span>
                                 <span class="price-fav">${priceP}</span>
                                 <span class="quantity-fav">1</span>
                             </div>
                        </a>
                        <i class="fa fa-trash remove-item-fav" aria-hidden="true"></i>
                    </li>`;

      document.querySelector(".items-fav").innerHTML += itemFav;

      let removeItemsFav = document.querySelectorAll(".remove-item-fav");

      removeItemsFav.forEach(function (item) {
        item.addEventListener("click", function (e) {
          let itemF = e.target.parentElement; //li
          let qty_ = itemF.querySelector(".quantity-fav").innerText;
          qtyTotalFav.innerText -= qty_;

          if (qtyTotalFav.innerText == 0) {
            document.querySelector(".empty-favs").style.display = "block";
          }
          itemF.remove();
        }); //end listener
      }); //end forEach
    } else {
      qtyf = document
        .getElementById(`fav-${id}`)
        .querySelector(".quantity-fav");
      ++qtyf.innerText;
    }

    document.querySelector(".empty-favs").style.display = "none";
  }); // end addToFavs
}); //forEach

// //get text or content or htmlcontent
// document.querySelector(".title").innerText;
// document.querySelector(".title").textContent;
// document.querySelector(".product").innerHTML;

// //change text or content or htmlcontnet
// document.querySelector(".title").innerText="new title";
// document.querySelector(".title").textContent="new title 2";
// document.querySelector(".product").innerHTML="<h1> new title</h1>";

// //get attributs of element such as: style, id, class, src(img), type(input), href(a),...
// document.querySelector(".title").id;
// document.querySelector(".title").className;//text
// document.querySelector(".profile-image").src;//src="image/1.jpg"
// //get style of element(css)
// document.querySelector(".title").style.background;
// document.querySelector(".title").style.marginTop;

// //change attributs of element such as: style, id, class, src(img), type(input), href(a),...
// document.querySelector(".title").id="title-3";
// document.querySelector(".title").className=" clr-red new-cls";//text
// document.querySelector(".profile-image").src="image/3.jpg";//src="image/1.jpg"
// //change style of element(css)
// document.querySelector(".title").style.background="red";
// document.querySelector(".title").style.marginTop="30px";

// //css connet to html
// // inline : attribute style , into tags of html
// // in sheet: tag style, into html file(head tag)
// // out sheet: file style, other file---> link
