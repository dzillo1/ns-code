const $orderOptionsModal = $('#order-options-modal');

// If hash tag is in URL on page load, show modal
if (window.location.hash === '#order-options') { 
    $orderOptionsModal.modal('show');
}          
// When modal is shown, add hashtag to URL
$orderOptionsModal.on('shown.bs.modal', function () {
    if (window.location.hash !== '#order-options') {
        window.location.hash = '#order-options';
    }
});        
// When modal is hidden, remove hashtag from URL
$orderOptionsModal.on('hidden.bs.modal', function () {
    if (window.location.hash === '#order-options') {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
});
