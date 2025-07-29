<script setup>

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
                                <h2 class="text-center option-title">Select Your Menu 
                                    <a href="#" onclick="omni_track('WhichisBest')" data-bs-target="#chefsPicks" data-bs-toggle="modal" class="more-info-link">More Info</a>
                                </h2> 
                            </div>  
                            <div class="col-12">
                                <div class="d-flex flex-column gap-3">
                                    <button type="button" aria-pressed="true" onclick="omni_track('Select:ChefsPicks')" value="favorite" id="favorites" name="favorite" class="selected menu-btn">
                                      
                                            <img src="../assets/chefpicks-btn.webp" alt="" loading="lazy" class="img-fluid">
                                        
                                        <div class="d-flex flex-column">
                                            <span class="btn-label">Chef’s Picks</span> 
                                            <span class="btn-desc">Recommended—try a variety of customer favorites</span>
                                        </div>
                                    </button> 
                                    <button type="button" onclick="omni_track('Select:PickMenu')" value="custom" id="custom" name="custom" aria-pressed="false" class="unselected  menu-btn">
                                        
                                            <img src="../assets/chooseown-btn.webp" alt="" loading="lazy" class="img-fluid">
                                       
                                        <div class="txt-wrap">
                                            <span class="btn-label">Choose My Own</span> 
                                            <span class="btn-desc">Simply pick what you like</span></div>
                                    </button>
                                </div>
                            </div>
                        </div>   
                    </div>
             
            </div>
        </div>
    </div>

</template>

<style scoped>

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
    padding: 12px 0 10px;
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
</style>