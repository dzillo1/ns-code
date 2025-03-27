$("#choose-flavor button").click(function () {
   const $chooseFlavorButtons = $("#choose-flavor button");
   const $theClickedButton = $(this);
   const selectedProdId = $theClickedButton.attr("data-prodId");

   $("#choose-flavor .selected").removeClass("selected");
   $theClickedButton.addClass("selected");

   $chooseFlavorButtons.each(function () {
       const $button = $(this);
       const prodId = $button.attr("data-prodId");

       if (prodId === selectedProdId) {
           $(`input[type="radio"]#${prodId}`).prop("checked", true);
           $button.addClass("selected");
           $button.attr("aria-pressed", true);
       } else {
           $(`input[type="radio"]#${prodId}`).prop("checked", false);
           $button.removeClass("selected");
           $button.attr("aria-pressed", false);
       }
   });

   const selectedFlavorText = $(".btn-interstitial.selected").text();
   $("#interstitial-flavor").text(selectedFlavorText);

   const selectedFlavorId = $(".btn-interstitial.selected").attr("id");
   sendGTMProductClickAndDetail(selectedFlavorId);
});
