<script setup>

import { ref } from 'vue'

const selectedMenu = ref('chefs')

function selectMenu(menu) {
    selectedMenu.value = menu;
}

const selectedPeople = ref('one')

function setNumberOfPeople(people) {
    selectedPeople.value = people;
}

const selectedDays = ref('5day')

function selectDays(day) {
    selectedDays.value = day;
}

const selectedShip = ref('auto-delivery')

function selectShip(ship) {
    selectedShip.value = ship;
}



    return {
        pricePerShipment: '349.99'
    }









</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 66%"></div>
                </div>
                <h1 class="mb-3">Nutrisystem Program</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
           
                    <div class="bg-white">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="option-title select-menu">Select Your Menu 
                                    <a href="#" onclick="omni_track('WhichisBest')" data-bs-target="#chefsPicks" data-bs-toggle="modal" class="more-info-link">More Info</a>
                                </h2> 
                            </div>  

                            <div class="col-12">
                                <div class="d-flex flex-column flex-md-row gap-3 mb-md-4 justify-content-center">
                                    <button 
                                    type="button" 
                                    aria-pressed="true" 
                                    value="favorite" 
                                    id="favorites" 
                                    name="favorite" 
                                    class="menu-btn"
                                    :class="[selectedMenu === 'chefs' ? 'selected' : 'unselected']"
                                    @click="selectMenu('chefs')"
                                    >
                                            <img src="../assets/chefpicks-btn.webp" alt="" loading="lazy" class="img-fluid">
                                        <div class="d-flex flex-column">
                                            <span class="btn-label">Chef’s Picks</span> 
                                            <span class="btn-desc">Recommended—try a variety of customer favorites</span>
                                        </div>
                                    </button> 
                                    <button 
                                    type="button" 
                                    value="custom" 
                                    id="custom" 
                                    name="custom" 
                                    aria-pressed="false" 
                                    class="menu-btn"
                                    :class="[selectedMenu === 'own' ? 'selected' : 'unselected']"
                                    @click="selectMenu('own')"
                                    >
                                    <img src="../assets/chooseown-btn.webp" alt="" loading="lazy" class="img-fluid">
                                        <div class="txt-wrap">
                                            <span class="btn-label">Choose My Own</span> 
                                            <span class="btn-desc">Simply pick what you like</span>
                                        </div>
                                    </button>
                                    <hr>
                                </div>

                            <div class="row">
                                <div class="col-12 col-md-6 order-options option-col">
                                    <h2 class="option-title">Number of People 
                                        <a href="#" onclick="omni_track('WhichisBest')" data-bs-target="#numberPeople" data-bs-toggle="modal" class="more-info-link">More Info</a>
                                    </h2> 
                                    <div class="btn-wrap mb-3">
                                    <button 
                                        type="button" 
                                        value="women" 
                                        id="women" 
                                        name="women" 
                                        aria-pressed="false" 
                                        :class="[selectedPeople === 'one' ? 'selected' : 'unselected']"
                                        @click="setNumberOfPeople('one')"
                                    >Individual
                                    </button> 
                                    <button 
                                        type="button" 
                                        aria-pressed="true" 
                                        value="men" 
                                        id="men" 
                                        name="men" 
                                        :class="[selectedPeople === 'two' ? 'selected' : 'unselected']"
                                        @click="setNumberOfPeople('two')"
                                    >Add a Partner
                                    <br aria-hidden="true">
                                    <span class="small fw-400">Save 15%</span>
                                    </button>
                                    </div>
                               
    
                                <h2 class="option-title">Days of Meals per week 
                                    <a href="#" onclick="omni_track('MoreInfo:MealDays')" data-bs-target="#mealdays" data-bs-toggle="modal" class="more-info-link">More info</a>
                                </h2> 
                                <div class="btn-wrap mb-4-5">
                                    <button 
                                    type="button" 
                                    value="most-day" 
                                    id="mostDay" 
                                    name="most-day" 
                                    aria-pressed="false" 
                                    :class="[selectedDays === '5day' ? 'selected' : 'unselected']"
                                    @click="selectDays('5day')"
                                    >5 Days</button> 
                                    <button 
                                    type="button" 
                                    value="every-day" 
                                    id="everyDay" 
                                    name="every-day" 
                                    aria-pressed="false" 
                                    :class="[selectedDays === '7day' ? 'selected' : 'unselected']"
                                    @click="selectDays('7day')"
                                    >7 Days</button>
                                </div>
                                   <hr class="d-block d-md-none">
    
                                <h2 class="option-title">Purchase Options</h2> 
                                <div class="sub-title-wrapper d-flex align-items-center gap-2 mb-3">
                                    <p class="fw-500 tk-korolev flex-shrink-0">Pay Monthly:</p> 
                                    <hr class="w-100 m-0">
                                </div>
                                <div class="d-flex flex-column delivery-options">
                                   
                                        <button 
                                        type="button" 
                                        value="autodelivery" 
                                        id="autodelivery" 
                                        name="delivery" 
                                        aria-pressed="true" 
                                        :class="[selectedShip === 'auto-delivery' ? 'selected' : 'unselected']"
                                        @click="selectShip('auto-delivery')"
                                        >
                                            <div class="d-flex">
                                                <div class="del-type">Monthly Auto-Delivery</div> 
                                            </div>
                                                <p class="del-price">$349.99 <span class="per">/first shipment</span></p> 
                                           
                                        </button>
                                   
                                        <div class="sub-title-wrapper mb-3">
                                            <span class="fw-500 tk-korolev">or Pre-pay &amp; Save up to $238!:</span>
                                        </div> 
                                        
                                       
                                            <button 
                                            type="button" 
                                            value="bogo" 
                                            id="bogo" 
                                            name="delivery" 
                                            aria-pressed="false" 
                                            :class="[selectedShip === 'bogo' ? 'selected' : 'unselected']"
                                            @click="selectShip('bogo')"
                                            >
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex flex-column">
                                                        <p class="del-type">Pay for 2 Shipments Now</p> 
                                                        <p class="del-price">$314.99 <span class="per">/shipment</span></p> 
                                                    </div>
                                                    <p class="save text-center flex-shrink-0">Save<br/> $70.00</p>
                                                </div>
                                            </button> 
    
                                            <button 
                                            type="button" 
                                            value="pre3pay" 
                                            id="pre3pay" 
                                            name="delivery" 
                                            
                                            aria-pressed="false" 
                                            :class="[selectedShip === 'prepay3' ? 'selected' : 'unselected']"
                                            @click="selectShip('prepay3')"
                                            >
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex flex-column">
                                                        <p class="del-type">Pay for 3 Shipments Now</p> 
                                                        <p class="del-price">$297.49 <span class="per">/shipment</span></p> 
                                                    </div>
                                                    <p class="save text-center flex-shrink-0">Save<br/> $157.50</p>
                                                </div>
                                            </button> 
    
                                            <button 
                                            type="button" 
                                            value="pre4pay" 
                                            id="pre4pay" 
                                            name="delivery" 
                                        
                                            aria-pressed="false" 
                                            :class="[selectedShip === 'prepay4' ? 'selected' : 'unselected']"
                                            @click="selectShip('prepay4')"
                                            >
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex flex-column">
                                                        <p class="del-type">Pay for 4 Shipments Now</p> 
                                                        <p class="del-price"> $290.49 <span class="per">/shipment</span></p> 
                                                    </div>
                                                    <p class="save text-center flex-shrink-0">Save<br/> $237.99</p>
                                                </div>
                                            </button> 
                                </div>
                            </div>
    
    
                            <div class="price-col col-12 col-md-6">
                                <div class="pricing-container d-flex flex-column gap-3">
                                    <p class="price-header pb-2">4 weeks, 5 days per week</p> 
    
    
                                    <div class="d-flex flex-column gap-3">
                                        <div class="plan-price d-flex justify-content-between">
                                            <p>Plan Price</p> 
                                            <p>$699.98</p>
                                        </div>   
                                        <div class="delivery-savings">
                                            <p>Pay For 2 Shipments Discount:</p> 
                                            <p class="fw-700 discount">-$70.00</p>
                                        </div> 
                                        <hr class="m-0">
                                    </div>
    
    
                                    <div class="per-shipment fw-700 d-flex justify-content-between">
                                        <p>Price Per Shipment:</p> 
                                        <p class="orderAmountStr">${{pricePerShipment}}</p>
                                    </div> 
          
                                </div> 
    
    
                        <div id="addShakes" class="card mb-3">
                            <div class="card-top d-flex align-items-center justify-content-between">
                                <p class="tk-korolev"><span class="fw-900">Bonus offer:</span> 50% off shakes to jumpstart your weight loss!</p> 
                                <a href="#" data-bs-target="#shakes-learn-more" data-bs-toggle="modal"  class="detail-link">Details</a>
                            </div> 
                            <div class="card-body p-3 w-100">
                                <div class="shake-checkbox form-check d-flex gap-3 align-items-start">
                                    <input id="shakesAdded" class="form-check-input" type="checkbox" value="" name="shakes-added" data-bs-toggle="collapse" href="#flavorSelect" aria-checked="false"> 
                                    <p class="tk-korolev add ms-0">Add 28 Protein Shakes <br/><span class="text-dk-grn fw-900 text-uppercase tk-arial">Save 50%</span></p> 
                                    <p class="price ms-auto"><s>$79.98</s><br aria-hidden="true"><span class="text-dk-grn fw-700">$39.98</span></p>
                                </div> 
                                <div id="flavorSelect" class="collapse mt-3" aria-expanded="false">
                                    <select id="chooseFlavor" name="choose-flavor" class="form-control"><option xsskuid="210154" xscategory="54" value="7698" selected="selected">Chocolate &amp; Vanilla </option><option xsskuid="210157" xscategory="54" value="7696">Vanilla </option><option xsskuid="210151" xscategory="54" value="7694">Chocolate </option></select>
                                </div>
                            </div>
                        </div>
                                
                                    <button type="submit" id="submitBtn" onclick="omni_track('ContinueToCheckout')" class="rc-submit btn btn-default btn-lg">Continue</button>
                          
                                <div v-if="showMbg">
                                    <div class="mbg d-flex align-items-center gap-3">
                                        <img class="mbg-img img-responsive pull-left" alt="Money Back Guarantee" src="../assets/2020-MBG-GoldSeal.svg">
                                        <p class="mbg-text tk-korolev fw-900">Try it and love it. Money back guaranteed. <a href="#MBG" data-target="#MBG" data-toggle="modal" class="detail-link" onclick="omni_track('MoneyBackGuarantee:SeeDetails')">Details</a></p>
                                    </div>
                                </div>            
                            </div>
                            </div>



                            </div><!--end row-->
                        </div>   
                    </div>
             
            </div>
        </div>
    </div>

</template>

<style scoped>

    p{
        margin:0;
        
        line-height:1;
        font-family: arial, Helvetica;
    }
    .mb-4-5{
        margin-bottom: 2rem;
    }
    .tk-korolev {
    font-family: "korolev", sans-serif;
}
.tk-arial{
    font-family: arial, Helvetica;
}
.small {
    font-size: .6875rem;
    line-height: 1.2;
}
.fw-400{
    font-weight:400;
}
.fw-900{
    font-weight:900;
}
.text-dk-grn {
    color: #006b00;
}
.progress {
    height: .75rem;
    border-radius: .5rem;
    margin:1rem 0 1.5rem;
    box-shadow: inset 0 1px 2px #0000001a;
}
.progress-bar {
    background-color: #64A535;
    border-radius: .5rem;
}
h1{
    font-weight:900;
    font-size: 1.375rem;
}
.bg-white{
    padding:1rem;
    border-radius: .5rem;
    box-shadow: 0 .25rem 1rem 0 rgba(0, 0, 0, 0.15);
}
.option-title{
    position:relative;
    font-size: 1.25rem;
    font-weight:700;
    margin-bottom:.75rem;
    text-align:center;
}
.more-info-link {
    position:absolute;
    top:.25rem;
    right:0;
    font-family: Arial, Helvetica, sans-serif;
    color: #00598a;
    font-size: .75rem;
    text-decoration: underline;
    font-weight: 400;
}
.menu-btn{
       font-size: 1em;
    font-family: arial;
    color: var(--Text-text-inactive, #6E7272);
    font-weight: 700;
    line-height: 1;
    background: #fff; 
    width: 100%;
    border-radius: .25rem;
    border: 2px solid var(--Stroke-stroke-primary, #BFC2C4);
    box-shadow: 0px .25rem .25rem 0px rgba(0, 0, 0, 0.11);
    height: auto;
    min-height: 120px;
    padding: 0 1rem 0 0;
    text-align: left;
    display: flex;
    gap: .625rem;
}
.menu-btn img{
width:100px;
}

.btn-label {
    color: var(--Text-text-inactive, #6E7272);
    font-family: Arial;
    font-size: 1em;
    font-weight: 700;
    line-height: 1.1;
    padding: .75rem 0 .625rem;
    display: block;
}

.btn-desc {
    color: var(--Text-text-inactive, #6E7272);
    font-family: Arial;
    font-size: .875em;
    font-weight: 400;
    line-height: 1.4;
    padding: 0 0 1rem;
    display: block;
}

button.selected:not(.btn-default) {
    border: 2px solid #1D4321;
    background: #fff;
}

.selected .btn-label {
    color: #1D4321;
    position: relative;
}

.selected .btn-label:after {
    content: "";
    width: 18px;
    height: 18px;
    background-image: url(../assets/btn-selected-check.svg);
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
}
.txt-wrap{
    width:100%;
}
.btn-wrap {
    display: flex;
    flex-direction: row;
    box-shadow: 0px .25rem .25rem 0px rgba(0, 0, 0, 0.11);
}
.order-options button:not(.btn-default) {
    background: #fff;
    border: 2px solid #bfc2c4;
    border-radius: 0;
    text-align: center;
    height: 58px;
    width: 50%;
    padding: 12px 8px;
    font-size: 1em;
    font-family: arial;
    color: var(--Text-text-inactive, #6E7272);
    font-weight: 700;
    line-height: 1;
}
.order-options button.selected {
    background: #1D4321;
    border: 2px solid #1D4321;
    color: #B5F25B;
}
.order-options button:not(.btn-default):first-child {
    border-radius: .25rem 0 0 .25rem;
    border-right: 0;
}
.order-options button:not(.btn-default):last-child {
    border-radius: 0 .25rem .25rem 0;
    border-left: 0;
}
.order-options button.selected:not(.btn-default) .small {
    color: #fff;
}
.order-options .delivery-options button:not(.btn-default) {
    border-radius: 0;
    outline: 0;
    border-radius: 0;
    font-family: arial, sans-serif;
    height: auto;
    width: 100%;
    text-align: left;
    border: 1px solid #bfc2c4;
    padding: .75rem 1rem;
    box-shadow: 0px .25rem .25rem 0px rgba(0, 0, 0, 0.11);
}

.order-options .delivery-options button:first-child {
    border-radius: .25rem;
    margin-bottom:0.625rem;

  
}
.order-options .delivery-options button#bogo, .order-options .delivery-options button#pre3pay {
    border-bottom:0;
}
.order-options .delivery-options button#bogo{
    border-radius: .25rem .25rem 0 0;
}
.order-options .delivery-options button#pre3pay {
   border-radius: 0;
}
.order-options .delivery-options button#pre4pay {
   border-radius:  0 0 .25rem .25rem;
}
.del-price {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.5;
    color: var(--Text-text-primary, #29353A);
}
button.selected .del-price {
    color: #fff;
}
button.selected .save {
    color: #B5F25B;
}
.delivery-options .save {
    color: #006b00;
    font-weight: 900;
    line-height: 1.2;
    font-family: Korolev;
    text-align: center;
    text-transform: uppercase;
}

.pricing-container{
   margin-bottom: 1.5rem;
    border-radius: .25rem;
    background: var(--Background-background-utility, #F9F9F9);
    padding: 1rem; 
}

#submitBtn {
    height: 57px;
    border-radius: .25rem;
    padding: 0;
    font-size: 1.875rem;
    font-family: korolev, arial, sans-serif;
    font-weight:700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f76800;
    border-color: #f76800;
    color: #fff;
    width:100%;
    margin-bottom:1.5rem;
}

.mbg-img {
    width: 2.938rem;
    height: auto;
}

.price-header{
   border-bottom: 1px solid var(--Stroke-stroke-primary, #BFC2C4); 
   text-align:center;
   font-size: 1.1875rem;
    font-weight: 700;
}

.delivery-savings{
    display:none
}
.per-shipment{
    font-size:1.25rem;
    font-weight:700;
    font-family: arial, Helvetica;
}

#addShakes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #fff;
    border-radius: 1rem;
    border: 1px solid #bfc2c4;
    margin-bottom:1.5rem;
}
#addShakes .card-top {
    display: flex;
    gap: .5rem;
    justify-content: space-between;
    padding: .5rem 1rem;
    background-color: #EFF6E4;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    width: 100%;
    align-items: center;
}
#addShakes .card-top p{
    line-height:1.5;
}
#addShakes .shake-checkbox {
    display: flex;
    align-items: flex-start;
    gap: .5rem;
    width: 100%;
}

input[type=checkbox] {
    background: #fff;
    border: 1px solid #ccc;
    border-radius:0;
    display: inline-block;
    height: 1.25rem;
    position: relative;
    vertical-align: middle;
    width: 1.25rem;
    box-shadow: inset 0 1px 3px #0000001a;
}

#addShakes .form-check-input[type="checkbox"]:checked {
    background: url(../assets/chk-grn-chkbx.svg) 50% no-repeat;
    left: 1px;
    min-width: 1rem;
    flex-shrink:0;
}

#addShakes .shake-checkbox p{
line-height:1.5;
}
.detail-link{
    color: #00598a;
        font-size: .75rem;
}







@media(max-width:767px){
    .option-col{
        margin-bottom: 2.5rem;
    }
}

@media(min-width:768px){
    h1 {
        font-size: 2.375em;
        margin: 0 0 1.5rem;
    }
    .bg-white {
        padding: 2rem 1rem;
    }
    .option-title{
        text-align:left;
    }
    .option-title.select-menu{
        text-align:center;
    }
    .option-title.select-menu .more-info-link{
            left: calc(50% + 90px);
            right: auto;
    }
}

@media(min-width:992px){
    .menu-btn {
        width: 375px;
    }
    .option-col, .price-col {
        padding: 0 2rem;
    }
}
</style>