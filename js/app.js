async function GetProducts(){
    const apiURL = "https://fakestoreapi.com/products";

    const response = await fetch(apiURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const products = await response.json();

    products.forEach((products)=>{
        AddProducts(products);
    });    

    console.log(products);
}


function AddProducts(products){
    const newArrivals = document.getElementById('newArrivals');

    const newArrivalsItem = document.createElement('div');
    newArrivalsItem.classList.add("new_arrivals_item");

    const newArrivalsImg = document.createElement('div');
    newArrivalsImg.classList.add('new_arrivals_img');

    const newArrivalsImgInner = document.createElement('img');
    newArrivalsImgInner.src = products.image;
    
    newArrivalsImg.appendChild(newArrivalsImgInner);

    const productTitle = document.createElement('h2');
    productTitle.innerHTML = products.title;

    const productRating = document.createElement('div');
    productRating.classList.add('product_raiting');

    const productRatingWrapper = document.createElement('div');
    productRatingWrapper.classList.add('product_rating_wrapper');

    const productRatingInner = document.createElement('div');
    productRatingInner.classList.add('product_rating_inner');

    const star1 = document.createElement('img');
    star1.src = "img/new-arrivals/star.svg";

    const star2 = document.createElement('img');
    star2.src = "img/new-arrivals/star.svg";

    const star3 = document.createElement('img');
    star3.src = "img/new-arrivals/star.svg";

    const star4 = document.createElement('img');
    star4.src = "img/new-arrivals/star.svg";

    const star5 = document.createElement('img');
    star5.src = "img/new-arrivals/star.svg";

    productRatingInner.appendChild(star1);
    productRatingInner.appendChild(star2);
    productRatingInner.appendChild(star3);
    productRatingInner.appendChild(star4);
    productRatingInner.appendChild(star5);

    productRatingWrapper.appendChild(productRatingInner);
    productRating.appendChild(productRatingWrapper);

    const ratingScore = document.createElement('div');
    ratingScore.classList.add('rating_score');

    productRatingWrapper.style.width = products.rating.rate/5 * 90 + "px";

    const span1 = document.createElement('span');
    span1.innerHTML = products.rating.rate;

    const span2 = document.createElement('span');
    span2.innerHTML = "/5";

    ratingScore.appendChild(span1);
    ratingScore.appendChild(span2);
    productRating.appendChild(ratingScore);

    const productPrice = document.createElement('div');
    productPrice.classList.add('product_price');

    const priceSpan1 = document.createElement('span');
    priceSpan1.innerHTML = products.price;
    productPrice.appendChild(priceSpan1);

    
    newArrivalsItem.appendChild(newArrivalsImg);
    newArrivalsItem.appendChild(productTitle);
    newArrivalsItem.appendChild(productRating);
    newArrivalsItem.appendChild(productPrice);

    newArrivals.append(newArrivalsItem);
}


function initSwiper() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: window.innerWidth < 390 ? 1 : 3,
      spaceBetween: 20,
     
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    });
  }

initSwiper();

window.addEventListener('resize', () => {
document.querySelector('.swiper-container').swiper.destroy(true, true);
initSwiper();
});


function HidePromotion(){
    const offer = document.getElementById('offer');

    offer.style.display = 'none';
}
let clickCounter = 0;

function HideNav(){
    const nav = document.getElementById('nav');
    const closeBtn = document.getElementById('closeBtn');

    if (clickCounter == 0){
        nav.style.display = 'flex';
        closeBtn.style.display = 'block';
        clickCounter++;
    }
    else if(clickCounter == 1){
        nav.style.display = 'none';
        closeBtn.style.display = 'none';
        clickCounter--;
    }
}

function ViewAll(){
    const newArrivals = document.getElementById('newArrivals');
    const viewAllBtn = document.getElementById('viewAllBtn');


    newArrivals.style.height = 'auto';
    newArrivals.style.overflow = 'unset';
    viewAllBtn.style.display = 'none';

}