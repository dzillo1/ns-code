$(document).ready(function() {
    setupOrderSummaryToggle();
    setupPhoneFocus();
    setupFormSubmission();
    setupTermsCheckbox();
    setupDeliveryFrequencyToggle();
    setupBillingAddressToggle();
});

function setupOrderSummaryToggle() {
    $('.your-order .ord-sum-link').click(function() {
        $(this).closest('.your-order .card-header').hide();
        $('.checkout .card.add-code-card').removeClass('hidden');
        $('.your-order .hide-ord-link').fadeIn();
    });
    $('.your-order .hide-ord-link').click(function() {
        $(this).hide();
        $('.your-order .card-header').fadeIn();
        $('.checkout .card.add-code-card').addClass('hidden');
        $('#showOrder').collapse('hide');
    });
}

function setupPhoneFocus() {
    $(".checkout #Phone").focus(function() {
        $('.checkout .ship-form .form-check').show();
    });
}

function setupFormSubmission() {
    $('#placeOrderSubmitButton').click(function(event) {
        var termsCheckbox = $('#adTerms');
        var errorMessage = $('.terms-agree');
        var termsWrap = $('.agree-autod-terms');

        if (!termsCheckbox.is(':checked')) {
            event.preventDefault();
            errorMessage.removeClass('d-none');
            termsWrap.addClass('error');
        } else {
            errorMessage.addClass('d-none');
            termsWrap.removeClass('error');
        }
    });
}

function setupTermsCheckbox() {
    $('#adTerms').change(function() {
        var errorMessage = $('.terms-agree');
        var termsWrap = $('.agree-autod-terms');

        if ($(this).is(':checked')) {
            errorMessage.addClass('d-none');
            termsWrap.removeClass('error');
        }
    });
}

function setupDeliveryFrequencyToggle() {

    const toggleVisibility = (selector, display) => {
                $(selector).each(function () {
            if (display === "none") {
                $(this).slideUp();
            } else {
                $(this).slideDown();
            }
        });
    };
    if (document.getElementById('addToPlan')) {
        toggleVisibility(".ship-frequency", "none");
    }
    document.getElementById("addToPlan").addEventListener("click", () => {
        toggleVisibility("#addedToPlanName", "block");
        toggleVisibility(".ship-frequency", "none");
    });
    document.getElementById("newDelivery").addEventListener("click", () => {
        toggleVisibility("#addedToPlanName", "none");
        toggleVisibility(".ship-frequency", "block");
        toggleVisibility(".promo-code-text", "block");
        toggleVisibility(".auto-bill-discl", "block");
    });

    document.getElementById("oneTimeOrder").addEventListener("click", () => {
        toggleVisibility("#addedToPlanName", "none");
        toggleVisibility(".ship-frequency", "none");
        toggleVisibility(".promo-code-text", "block");
        toggleVisibility(".auto-bill-discl", "none");
    });
}



$(document).ready(function() {
    const checkbox = document.getElementById("BillingAddress");
    const elements = document.getElementsByClassName("diff-bill-addr");

    checkbox.addEventListener("change", () => {
        for (let element of elements) {
            if (checkbox.checked) {
                $(element).slideUp();
            } else {
                $(element).slideDown();
            }
        }
    });
});
