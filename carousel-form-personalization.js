$(document).ready(function(){
    $('#quiz-carousel').carousel({
        interval: false,
        wrap: false,
        keyboard: false
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#quiz-carousel").carousel("prev");
    });

    //Non-required slides can move forward
    $(".item.active .btn-default.right, #emailAddress .btn.right, #gotIt .btn.right, #foodsCrave .btn.right").click(function(e){
        $("#quiz-carousel").carousel("next");
        $(".no-selection-error").hide();
        e.preventDefault();
    });

    $(".next-btn.right").click(function(){
        if ($(".item.active .quiz-button, .item.active .gender-type, .item.active .body-type").hasClass("checked")) {
            $("#quiz-carousel").carousel("next");
            $(".no-selection-error").hide();
        } else {
            $(".no-selection-error").show().focus();
        }
    });

    //hide error when checked
    $(".item.active .quiz-button, .item.active .gender-type, .item.active .body-type").click(function(){
        $(".no-selection-error").hide();
    });

    $("#dieteryNeeds .next-btn.right").click(function(e){
        if ($(".diet-needs").hasClass("active")) {
            $("#quiz-carousel").carousel("next");
            $(".no-selection-error").hide();
        } else {
            $(".no-selection-error").show().focus();
        }
        e.preventDefault();
    });

    //check validity on form fields before next slide
    $("#heightWeight .next-btn").click(function(){
         if ( ($('#heightInFeet')[0].checkValidity() == true) && ($('#heightInInches')[0].checkValidity() == true) && ($('#currentWeight')[0].checkValidity() == true) ) {
             $("#quiz-carousel").carousel("next");
             $(".no-selection-error").hide();
         }
         else {
             $(".no-selection-error").show().focus();
         }
    });

    //add aria-pressed class for accessibility
    $('.quiz-button, .gender-type, .body-type').click(function(){
        $('.quiz-button, .gender-type, .body-type').removeClass("checked").attr('aria-pressed', 'false');

        $(this).closest('.quiz-button, .gender-type, .body-type').addClass("checked").attr('aria-pressed', 'true');
    });

    //change bg color for 1 slide
    $('#quiz-carousel').on('slide.bs.carousel', function (ev) {
        var id = ev.relatedTarget.id;
        switch (id) {
            case "gotIt":
                $('main').removeClass('bg-mint').addClass('bg-light-yellow');
                break;
            case "foodsCrave": //hide meats if Vegetarian selected
                if ($("#isVegetarian").prop("checked") == true) {
                    $(".meats").hide();
                }
                else {
                    $(".meats").show();
                }
                break;
            case "name": //show email input in name screen
                if($("#email").val() !='') {
                    $("#finalEmail").hide();
                }
                else {
                    $("#finalEmail").show();
                }
            default:
                $('main').removeClass('bg-light-yellow').addClass('bg-mint');
        }

    });

    //unselect diabetes & vegetarian buttons
    $("#neither").change(function(){
        if ($(this).prop("checked", true)) {
            $("#isVegetarian, #isDiabetic").prop("checked", false);
            $("#isVegetarian, #isDiabetic").parent().removeClass('active');
        }
    });
    $("#isVegetarian, #isDiabetic").change(function(){
        if ($(this).prop("checked", true)) {
            $("#neither").prop("checked", false);
            $("#neither").parent().removeClass('active');
        }
    });

    //current weight warning
    $(".gender-type").click(function () {
        var currentWeight = $("#currentWeight").val();
        if (($("#genderFemale").hasClass("checked")) && ((currentWeight >= '400'))) {
            $(".weight-message").show();
        }
        else if (($("#genderMale").hasClass("checked")) && ((currentWeight >= '450'))) {
            $(".weight-message").show();
        }
        else {
            $(".weight-message").hide();
        }
    });

    //overlay
    $("#seeResults").click(function(){
        if (($('#firstName')[0].checkValidity() == true) && ($('#email2')[0].checkValidity() == true)) {
            $("#loadingPage").show();
            setTimeout(function () {
                $("#loadingPage").hide();
            }, 3000)
        }
    });
    $("#loadingPage").on("click keydown", function(){
        $("#loadingPage").hide();
    });

    $(".high-value").click(function(){
        $(this).closest('.slidecontainer').find('.slider').val("100");
    });
    $(".low-value").click(function(){
        $(this).closest('.slidecontainer').find('.slider').val("0");
    });
    $(".mid-value").click(function(){
        $(this).closest('.slidecontainer').find('.slider').val("50");
    });
});



