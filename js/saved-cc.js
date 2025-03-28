
const errinput = '#savedCC';
const closestCollapse = $(errinput).parents('.collapse');

if (closestCollapse.is(':hidden')) {
    closestCollapse.collapse('show');
    const parentCollapse = closestCollapse.closest('.collapse');
    if (parentCollapse.is(':hidden')) {
        parentCollapse.collapse('show');
        $('#defaultCardStaticDisplay').hide();
    }

    const savedCards = $('#savedCards');
    if (savedCards.length) {
        savedCards.find('.panel').collapse('hide');
        savedCards.find('.radio label').removeClass('selected');
        closestCollapse.prev('.radio').children('label').addClass('selected').children('input').attr('checked', 'checked');
    }

    const addCreditCardDetails = $('#addCreditCardDetails');
    if (addCreditCardDetails.is(':visible')) {
        $('#BillingAddress').attr('checked', false);
        $('#defaultCardStaticDisplay').hide();
    }
}
