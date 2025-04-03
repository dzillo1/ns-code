<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>product item</title>
    <link rel="stylesheet" type="text/css" href="https://www.nutrisystem.com/css/website/bootstrap5/bootstrap-5.css" />
    <link rel="stylesheet" href="https://use.typekit.net/foj5idg.css">

    <script src="https://unpkg.com/vue@3.5.13/dist/vue.global.js"></script>
    <script>
        // Enable Vue.js devtools
        Vue.config.devtools = true;
    </script>
    
    <script src="https://www.nutrisystem.com/js/bootstrap5/popper.min.js"></script>
    <script src="https://www.nutrisystem.com/js/bootstrap5/bootstrap-5.js"></script>
</head>
<body>
<!------------------------------------------------------------> 
<div class="container">

    <div id="productItem" product-id="669"> 
        <div class="card gap-3">
            <div class="card-top">
                <a href="#">
                    <img src="https://www.nutrisystem.com/images/products/frozen/small/Italian-Sausage-And-Turkey-Pepperoni-Pizza_M.jpg" alt="Italian Sausage and Turkey Pepperoni Pizza" class="food-img img-fluid">
                </a>
            </div> 
            <div class="card-body d-flex flex-column gap-2">
              <p class="food-title tk-korolev">Italian Sausage and Turkey Pepperoni Pizza</p>
              <div class="prod-cat d-flex gap-2">
                  <img src="https://www.nutrisystem.com/images/pdp/frozen.svg" alt="frozen">
                  <img src="https://www.nutrisystem.com/images/pdp/glp1.svg" alt="glp1">
                  <img src="https://www.nutrisystem.com/images/pdp/high-protein.svg" alt="high protein">
              </div> 
            </div>
            <div class="card-footer d-flex flex-column gap-3">
              <p class="product-price text-green-darker fw-700">${{formattedPriceItem}}</p>
              <button 
              type="button" 
              class="btn btn-primary-outline add-to-cart-btn d-flex justify-content-center align-items-center gap-1 text-uppercase"
              v-if="showAddBtn"
              @click="showCounter"
              ><span>+</span> Add</button>
              <div class="counter d-flex" v-show="isVisible">
                <button 
                type="button" 
                class="lower-qty btn exclude-load fw-400 d-flex align-items-center justify-content-center"
                @click="itemDecrement"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"> <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/> </svg><span class="visually-hidden">Remove</span></button> 
                <input 
                type="number" 
                size="3" 
                maxlength="2" 
                title="numbers only" min="0" pattern="0-9*" 
                class="form-control qty fw-700" 
                v-model="quantity" 
                  /> 
                <button 
                type="button" 
                class="add-qty btn exclude-load d-flex align-items-center justify-content-center"
                @click="itemIncrement"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/> </svg><span class="visually-hidden">Add</span></button>
              </div>
            </div>
        </div>
    </div>

</div>

<script>
const app = Vue.createApp({
      data() {
        return{
          quantity: 1,
          priceItem: 5.50,
          isVisible: false,
          showAddBtn: true,
          quantity: 0,
        };
      },
      methods: {
        itemIncrement(){
          this.quantity++;
        },
        itemDecrement() {
          if (this.quantity > 0) {
            this.quantity--;
          }
          if (this.quantity === 0) {
            this.isVisible = false;
            this.showAddBtn = true;
          }
        },
        updateCount(event){
          const value = parseInt(event.target.value);
          this.quantity = isNaN(value) ? 0 : value;
          if (this.quantity === 0) {
            this.isVisible = false;
            this.showAddBtn = true;
          }
        },
        showCounter(){
          this.isVisible = true;
          this.showAddBtn = false;
          this.quantity++;
        },
      },
      computed:{
        formattedPriceItem() {
            return this.priceItem.toFixed(2);
        },
        totalPriceItems() {
            return (this.quantity * this.priceItem).toFixed(2);
        },
      }
});
app.mount('#productItem');
</script>

<style scoped>
  #productItem{
    font-size: 1rem;
    font-family: Arial, sans-serif;
    padding: 1rem 0 .625rem;
    max-width:17.5rem;
  }
  #productItem .card{
    padding:1rem;
  }
  #productItem .food-title {
    font-size: 1.125rem;
    font-weight: 400;
    text-decoration: none;
  }
  #productItem .add-to-cart-btn {
    height: 2.688rem;
    font-size: 1.188rem;
    color: #006B00;
    background-color: #fff;
    border-radius: .25rem;
    border: 2px solid var(--Action-action-secondary-green, #006B00);
    background: var(--Background-background-primary, #FFF);
    width:65%;
  }
  #productItem .img-modal-link{
    width:7.5rem;
    flex-shrink: 0;
  }
  #productItem .counter{
    width:11.25rem;
  }
  #productItem input::-webkit-outer-spin-button,
  #productItem input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0 auto;
  }
  #productItem input[type="number"] {
    -moz-appearance: textfield;
    border-top: 2px solid var(--Colors-Brand-Dark-Green, #006B00);
    border-bottom: 2px solid var(--Colors-Brand-Dark-Green, #006B00);
    font-size:1.5rem;
    text-align: center;
    border-radius: 0;
    height:2.5rem;
    width:3rem;
    padding:0;
  }
  #productItem .title-modal-link {
    text-decoration: none;
    color: var(--ns-gray);
  }
  #productItem .lower-qty, #productItem .add-qty {
    border-radius: .25rem 0 0 .25rem;
    border: 2px solid var(--Colors-Brand-Dark-Green, #006B00);
    background: var(--Colors-Brand-White, #FFF);
    border-right:0;
    background: #fff;
    padding: .75rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  #productItem .add-qty {
    border-radius: 0 .25rem .25rem 0;
    border-left: 0;
    border-right: 2px solid var(--Colors-Brand-Dark-Green, #006B00);
  }
  #productItem .remove {
    color: #6d7477;
    font-size: .813rem;
  }
  #productItem .lower-qty:focus, #productItem .add-qty:focus {
      color: var(--bs-body-color);
      background-color: var(--ns-mint);
      border: 2px solid var(--ns-dark-green);
      outline: 0;
  }
  #productItem .product-price{
    font-size: 1.375rem;
  }
  #productItem .prod-cat img {
      height: 1.3125rem;
      width: auto;
  }
</style>
<!------------------------------------------------------------>
</body>
</html>