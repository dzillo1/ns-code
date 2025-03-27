$( "#label1 input, #label2 input, #label3 input" ).change(function() {
    var $label = $(this).closest('label');
    var $addedBtn = $label.parent().find('.added-btn');
    var checked = $(this).is(':checked');
    
    $label.toggleClass('add-cart', !checked);
    $addedBtn.toggle(checked);
});
