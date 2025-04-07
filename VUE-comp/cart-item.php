<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Options</title>
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
        <div id="shoppingCart" class="container">
          <div v-if="isVisible" id="cartItem" class="d-flex flex-column gap-3">
            <div class="d-flex align-items-center gap-3">
                <a href="#" class="img-modal-link">
                    <img src="https://www.nutrisystem.com/images/products/frozen/small/Italian-Sausage-And-Turkey-Pepperoni-Pizza_M.jpg" class="img-fluid item-img" alt="Italian Sausage and Turkey Pepperoni Pizza" loading="lazy">
                </a> 
                <a href="#" class="title-modal-link">
                  <p>Italian Sausage and Turkey Pepperoni Pizza</p> 
                  <img src="images/frozen-icon.svg" class="cat-icon" alt="frozen">
                </a>
            </div> 
            <div class="qty-total d-flex gap-3 flex-wrap">
              <div class="qty-wrapper d-flex">
                  <button 
                  type="button" 
                  class="lower-qty btn exclude-load fw-400"
                  @click="itemDecrement"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"> <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/> </svg><span class="visually-hidden">Remove</span></button> 
                  <input 
                  type="number" 
                  size="3" 
                  maxlength="2" 
                  title="numbers only" min="0" pattern="0-9*" class="form-control qty" 
                  v-model="quantity" 
                   /> 
                  <button 
                  type="button" 
                  class="add-qty btn exclude-load"
                  @click="itemIncrement"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/> </svg><span class="visually-hidden">Add</span></button>
              </div>
              <div class="totals d-flex flex-column ms-auto text-right">
                <div class="each d-flex gap-3">
                  <p class="lbl">Each</p> 
                  <p class="ms-auto">${{formattedPriceItem}}</p>
                </div>
                <div class="each total d-flex gap-3 text-right">
                  <p class="lbl">Total</p> 
                  <p class="total fw-700 ms-auto">${{totalPriceItems}}</p>
                </div>
                <a href="#" 
                @click.prevent="removeItem()"
                class="remove text-right ms-auto">Remove</a>
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
          isVisible: true,
        };
      },
      methods: {
        itemIncrement(){
          this.quantity++;
        },
        itemDecrement(){
          if (this.quantity > 0){
          this.quantity--;
        }
        this.checkVisibility();
        },
        updateCount(event){
          const value = parseInt(event.target.value);
          this.quantity = isNaN(value) ? 0 : value;
          this.checkVisibility();
        },
        removeItem(){
          this.isVisible=false;
        },
        checkVisibility(){
          if(this.quantity===0){
            this.isVisible=false;
          }
        }
      },
      computed:{
        formattedPriceItem() {
            return this.priceItem.toFixed(2);
        },
        totalPriceItems() {
            return (this.quantity * this.priceItem).toFixed(2);
        }
      }
});
app.mount('#shoppingCart');
</script>

<style scoped>
  #cartItem{
    border-bottom: 2px solid var(--ns-lightest-gray);
    font-size: 1rem;
    font-family: Arial, sans-serif;
    padding: 1rem 0 .625rem;
  }
  #cartItem .img-modal-link{
    width:7.5rem;
    flex-shrink: 0;
  }
  #cartItem .qty-wrapper{
    width:65%;
  }
  #cartItem input.form-control.qty{
    text-align: center;
    border-radius: 0;
    height:2.5rem;
    width:3rem;
  }
  #cartItem input::-webkit-outer-spin-button,
  #cartItem input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0 auto;
  }
  #cartItem input[type="number"] {
      -moz-appearance: textfield;
  }
  #cartItem .title-modal-link {
    text-decoration: none;
    color: var(--ns-gray);
  }
  #cartItem .lower-qty, #cartItem .add-qty {
    border-radius: .25rem 0 0 .25rem;
    border: 1px solid #d6d6d6;
    border-right: 0;
    color: var(--ns-gray);
    background: #fff;
    padding: .75rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
#cartItem .add-qty {
    border-radius: 0 .25rem .25rem 0;
    border: 1px solid #d6d6d6;
    border-left: 0;
  }
  #cartItem .remove {
    color: #6d7477;
    font-size: .813rem;
}
#cartItem .lower-qty:focus, #cartItem .add-qty:focus {
    color: var(--bs-body-color);
    background-color: var(--ns-mint);
    border: 2px solid var(--ns-dark-green);
    outline: 0;
}
</style>
<!------------------------------------------------------------>
</body>
</html>
