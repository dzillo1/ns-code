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
    <!-- <script src="https://www.nutrisystem.com/js/app.js"></script>-->
    <script src="https://www.nutrisystem.com/js/bootstrap5/popper.min.js"></script>
    <script src="https://www.nutrisystem.com/js/bootstrap5/bootstrap-5.js"></script>
</head>
<body>
<!------------------------------------------------------------> 

<div id="orderOptions">
    <div class="container">
        <div class="oo-wrap">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h2 class="mb-3">Customize your Plan</h2>

                    <div id="mealPlanOptions" class="option-cat d-flex flex-column flex-md-row justify-content-between mb-3">
                        <p class="option-title tk-korolev fw-700 justify-content-between d-flex flex-md-column">Meal Plan 
                            <a href="#" onclick="omni_track('MoreInfo:MealPlan')" data-bs-target="#mealPlan" data-bs-toggle="modal" class="more-info-link fw-400">More info</a>
                        </p> 
                        <div class="btn-wrap d-flex justify-content-between gap-3">
                            <button id="highProtein" 
                            :class="{'selected': selectedMealPlan === 'highProtein'}"
                            class="" 
                            type="button" 
                            :aria-pressed="selectedMealPlan === 'highProtein'" 
                            @click="selectMealPlan('highProtein')" 
                            value="highProtein" 
                            name="meal-plan">High Protein</button> 
                            <button 
                            id="lowCarb" 
                            :class="{'selected': selectedMealPlan === 'lowCarb'}"
                            class=""  
                            type="button" 
                            :aria-pressed="selectedMealPlan === 'lowCarb'" 
                            @click="selectMealPlan('lowCarb')" 
                            value="lowCarb" 
                            name="meal-plan">Low Carb</button>
                        </div>
                    </div>

                    <div id="menu-options" class="option-cat d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                        <p class="option-title tk-korolev fw-700 d-flex flex-md-column">Menu
                            <a href="#" onclick="omni_track('MoreInfo:ChefsPicks')" data-bs-target="#chefsPicks" data-bs-toggle="modal" class="more-info-link fw-400">More info</a>
                        </p> 
                        <div class="btn-wrap d-flex justify-content-between align-items-end gap-3">
                            <div class="btn-wrap-co d-flex flex-column">
                                <span class="chf-pk-co text-white bg-dark-green tk-korolev fw-900 text-uppercase">Best for first order</span> 
                                <button 
                                id="favorites"
                                :class="{'selected': selectedMenu === 'chefspicks'}"
                                @click="selectMenu('chefspicks')"
                                type="button" 
                                :aria-pressed="selectedMenu === 'chefspicks'"  
                                value="favorite" 
                                name="menuoption" 
                                onclick="omni_track('Select:ChefsPicks')" 
                                class="">Chef’s Picks</button>
                            </div> 
                            <button 
                            id="custom"
                            :class="{'selected': selectedMenu === 'illpick'}"
                            @click="selectMenu('illpick')"
                            type="button" 
                            :aria-pressed="selectedMenu === 'illpick'"  
                            value="custom" 
                            name="menuoption" 
                            onclick="omni_track('SelectPickMenu')" 
                            class="">I’ll Pick My Menu</button>
                        </div>
                    </div>

                    <div id="shipFreq" class="option-cat d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
                        <p class="option-title tk-korolev fw-700 justify-content-between d-flex flex-md-column">Shipment <br aria-hidden="true" class="d-none d-md-block">Frequency 
                            <a href="#" onclick="omni_track('MoreInfo:MealsPerWeek')" data-bs-target="#my-meals-difference" data-bs-toggle="modal" class="more-info-link fw-400">More info</a>
                        </p> 
                        <div class="btn-wrap d-flex justify-content-between gap-3">
                            <button 
                            id="twoWks"
                            :class="{'selected': shipFrequency === 'twoweeks'}"
                            @click="selectFreq('twoweeks')"
                            type="button" 
                            :aria-pressed="shipFrequency === 'twoweeks'"
                            value="twoWks"  
                            name="mealoption" 
                            onclick="omni_track('Select:28Meals')" 
                            class="">2 Weeks </button> 
                            <button 
                            id="fourWks"
                            :class="{'selected': shipFrequency === 'fourweeks'}"
                            @click="selectFreq('fourweeks')"
                            type="button" 
                            :aria-pressed="shipFrequency === 'fourweeks'" 
                            value="fourWks" 
                            name="mealoption" 
                            onclick="omni_track('Select:56Meals')" 
                            class="">4 Weeks</button>
                        </div>
                    </div>

                    <h2 class="mb-3">Purchase options</h2>
                    <div id="deliveryOptions">
                        <div class="auto-d-wrap">
                            <div class="sub-title tk-korolev d-flex align-items-center mb-2 fw-700"><p>Pay per shipment:</p> <hr></div> 
                            <div class="btn-wrap mb-4">
                                <button id="autoDelivery" 
                                :class="{'selected': selectedPrepay === 'autoDelivery'}"
                                class="w-100 mb-3" 
                                :aria-pressed="selectedPrepay === 'autoDelivery'" 
                                @click="selectPrepay('autoDelivery')" 
                                type="button" value="autoDelivery"  
                                name="delivery"  aria-pressed="true">
                                    <div class="ship-btn-txt d-flex">
                                        <div class="del-type fw-900">Per Shipment Auto-Delivery <br aria-hidden="true"> <span class="per-ship">${{autoDeliveryPerShip}}/per shipment</span></div>
                                    </div>
                                </button> 
                                <div class="sub-title tk-korolev d-flex align-items-center mb-2 fw-700"><p>or Pre-pay &amp; Save up to ${{prepaySaveUpTo}}!:</p> <hr></div> 
                                <div class="prepay d-flex flex-column">
                                    <button type="button" 
                                    value="bogo" 
                                    id="bogo" 
                                    :class="{'selected': selectedPrepay === 'bogo'}" 
                                    class="mb-3"
                                    :aria-pressed="selectedPrepay === 'bogo'" 
                                    @click="selectPrepay('bogo')" name="delivery"  
                                    aria-pressed="false" >
                                        <div class="ship-btn-txt d-flex justify-content-between"><div class="del-type fw-900">Pay for 2 shipments now  <span class="per-ship">${{bogoPerShip}}/per shipment </span></div> <span class="save">Save ${{bogoSave}}</span></div></button> 
                                    <button type="button" value="pre3pay" id="pre3pay" 
                                    :class="{'selected': selectedPrepay === 'pre3pay'}" 
                                    class="mb-3"
                                    :aria-pressed="selectedPrepay === 'pre3pay'" 
                                    @click="selectPrepay('pre3pay')" 
                                    name="delivery"  
                                    aria-pressed="false" >
                                        <div class="ship-btn-txt d-flex justify-content-between"><div class="del-type fw-900">Pay for 3 shipments now  <span class="per-ship">${{prePay3PerShip}}/per shipment</span></div> <span class="save">Save ${{prePay3Save}}</span></div></button> 
                                    <button type="button" value="pre4pay" id="pre4pay" 
                                    :class="{'selected': selectedPrepay === 'pre4pay'}"
                                    class=""
                                    :aria-pressed="selectedPrepay === 'pre4pay'" @click="selectPrepay('pre4pay')" name="delivery"  aria-pressed="true" >
                                        <div class="ship-btn-txt d-flex justify-content-between"><div class="del-type fw-900">Pay for 4 shipments now  <span class="per-ship">${{prePay4PerShip}}/per shipment</span></div> <span class="save">Save ${{prePay4Save}}</span></div></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 ps-lg-4-5">
                    <div id="priceSummary" class="mb-4 d-flex flex-column gap-3">
                        <div class="price-meal d-flex justify-content-between border-bottom pb-2-5 fw-700">
                            <p>Price Per Meal</p> 
                            <p>${{pricePerMeal}}</p>
                        </div> 
                        <div class="price-access d-flex justify-content-between align-items-center border-bottom pb-2-5 fw-700">
                            <p>6-month Club Advantage Access <i class="value text-green-darker fw-400">$69.99 Value!</i></p> 
                            <p>FREE</p>
                        </div> 
                        <div class="price-shipment d-flex justify-content-between fs-5 fw-700">
                            <p>Price Per Shipment:</p> <p>${{pricePerShipment}}</p>
                        </div> 
                    </div>
<!--add shakes-->
                    <div id="addShakes" class="card mb-3">
                        <div class="card-top d-flex align-items-center justify-content-between">
                            <p class="tk-korolev"><span class="fw-900 text-uppercase">Bonus offer:</span> 50% off shakes to jumpstart your weight loss!</p> 
                            <a href="#" data-bs-target="#shakes-learn-more" data-bs-toggle="modal"  class="more-info-link">Details</a>
                        </div> 
                        <div class="card-body p-3">
                            <div class="shake-checkbox form-check d-flex gap-3 align-items-start">
                                <input id="shakesAdded" class="form-check-input" type="checkbox" value="" name="shakes-added" data-bs-toggle="collapse" href="#flavorSelect" aria-checked="false"> 
                                <p class="tk-korolev add ms-0">Add 28 Protein Shakes <br><span class="text-green-darker fw-900 text-uppercase">Save 50%</span></p> 
                                <p class="price ms-auto"><s>$79.98</s><br aria-hidden="true"><span class="text-green-darker fw-700">$39.98</span></p>
                            </div> 
                            <div id="flavorSelect" class="collapse mt-3" aria-expanded="false">
                                <select id="chooseFlavor" name="choose-flavor" class="form-control"><option xsskuid="210154" xscategory="54" value="7698" selected="selected">Chocolate &amp; Vanilla </option><option xsskuid="210157" xscategory="54" value="7696">Vanilla </option><option xsskuid="210151" xscategory="54" value="7694">Chocolate </option></select>
                            </div>
                        </div>
                    </div>

                    <button type="submit" id="submitBtn" class="rc-submit btn btn-default w-100">Continue</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      selectedMealPlan: 'highProtein',
      selectedPrepay: 'autoDelivery',
      selectedMenu: 'chefspicks',
      shipFrequency: 'twoweeks',
      autoDeliveryPerShip: '129.99',
      bogoPerShip: '116.99',
      prePay3PerShip: '110.49',
      prepaySaveUpTo: '88',
      bogoSave: '26',
      prePay3Save: '59',
      prePay4Save: '88',
      prePay4PerShip: '107.89',
      shakesAdded: false,
      pricePerMealMap: {
        twoweeks: {
          autoDelivery: '4.64',
          bogo: '4.18',
          pre3pay: '3.95',
          pre4pay: '3.85'
        },
        fourweeks: {
          autoDelivery: '4.11',
          bogo: '3.70',
          pre3pay: '3.49',
          pre4pay: '3.41'
        }
      }
    }
  },
  methods: {
    selectMealPlan(plan) {
        this.selectedMealPlan = plan;
    },
    selectMenu(menu) {
        this.selectedMenu = menu;
    },
    selectFreq(freq) {
    this.shipFrequency = freq;
    const freqData = {
      twoweeks: {
        prepaySaveUpTo: '88',
        autoDeliveryPerShip: '129.99',
        bogoPerShip: '116.99',
        bogoSave: '26',
        prePay3PerShip: '110.49',
        prePay3Save: '59',
        prePay4PerShip: '107.89',
        prePay4Save: '88'
      },
      fourweeks: {
        prepaySaveUpTo: '156',
        autoDeliveryPerShip: '229.99',
        bogoPerShip: '206.99',
        bogoSave: '46',
        prePay3PerShip: '195.49',
        prePay3Save: '104',
        prePay4PerShip: '190.89',
        prePay4Save: '156'
      }
    };
    Object.assign(this, freqData[freq]);
  },
    selectPrepay(prepay) {
        this.selectedPrepay = prepay;
    },
    changePricePerMeal(newPricePerMeal) {
        this.pricePerMeal = newPricePerMeal;
    }
  },
  computed: {
    pricePerShipment() {
      switch (this.selectedPrepay) {
        case 'autoDelivery':
          return this.autoDeliveryPerShip;
        case 'bogo':
          return this.bogoPerShip;
        case 'pre3pay':
          return this.prePay3PerShip;
        case 'pre4pay':
          return this.prePay4PerShip;
        default:
          return this.autoDeliveryPerShip;
      }
    },
    pricePerMeal() {
        return (
           this.pricePerMealMap[this.shipFrequency]?.[this.selectedPrepay] || '0.00'
        );
    }
  }
});

app.mount('#orderOptions');
</script>

<style scoped>
    body{
        background-color: #FFFAF1;
        padding-top:2rem;
    }
    #orderOptions .oo-wrap{
        background-color: #fff;
        padding:1rem;
        border-radius: .5rem;
        box-shadow: 0rem .25rem 1rem 0rem rgba(0, 0, 0, 0.17);
    }
    #orderOptions h2{
        font-size: 1.125em;
        font-weight: 900;
    }
    #orderOptions hr {
        margin: 0;
        height: 1px;
        border-color: #BFC2C4;
        flex-grow: 1;
    }
    #orderOptions .selected {
        background: #f0f7ec;
    border: 2px solid #64a535;
    font-weight: 900;
    }
    #orderOptions button {
        background: #fff;
        border: 1px solid #bfc2c4;
        border-radius: 6.25rem;
        text-align: center;
        height: 2.5rem;
        padding: .125rem .75rem;
        font-size: 1rem;
        font-family: korolev, arial, sans-serif;
        flex-grow:1;
        line-height: normal;
        width:47%;
    }
    #orderOptions .btn-wrap-co{
        width:47%;
    }
    #orderOptions button#favorites {
        width: auto;
    }
    #orderOptions  button#submitBtn{
        background: #f76800;
        border-color: #f76800;
        border-radius: 4px;
        padding: 0;
        width:100%;
        height:2.938rem;
        font-size:1.875rem;
    }
    #orderOptions #deliveryOptions button{
        height:4rem;
        width:100%;
        text-align: left;
        padding: 0 1.5rem;
    }
    #orderOptions .per-ship{
        font-weight:400;
        font-family: Arial, Helvetica, sans-serif;
    }
    #orderOptions .save{
        font-weight:700;
        font-family: Arial, Helvetica, sans-serif;
        color: #006b00;
        text-align: right;
    }
    #orderOptions .more-info-link{
        font-size: .75rem;
    }
    #orderOptions .price-meal, .price-access{
        font-size:1.125rem;
    }

    #orderOptions .chf-pk-co{
        font-size: .75em;
        line-height: 1;
        border-radius: 1rem;
        background: var(--Background-background-bold, #006B00);
        padding: 0.125rem 0.625rem;
        text-align: center;
        width:90%;
        margin:0 auto;
    }
    #addShakes .card-top{
        background: var(--Background-background-tertiary, #EFF6E4);
        padding: .5em 1em;
    }
@media(max-width:375px){
    #orderOptions .chf-pk-co{
        width:100%;
    }
}
    @media(min-width:768px){
        #orderOptions h2 {
            font-size: 1.375rem;
        }
        #orderOptions .option-cat button, #orderOptions button#favorites {
            width: 10.5rem;
        }
        #orderOptions .chf-pk-co {
        width: 8.5rem;
        margin: 0 auto;
    }
    }
    @media(min-width:992px){

        #orderOptions .chf-pk-co {
            width:9rem;
        }
    }
    @media(min-width:1200px){
        #orderOptions .oo-wrap {
            padding: 2rem 1.5rem;
        }
    }
</style>

<!------------------------------------------------------------>
</body>
</html>
