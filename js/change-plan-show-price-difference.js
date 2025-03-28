$(() => {
  // Constants
  const INITIAL_VISIBLE_PANES = 6;
  const ADDITIONAL_PANES = 3;

  // Cache selectors
  const $seeMoreLink = $('a.see-more-link');
  const $showLessLink = $('a.show-less-link');
  const $panes = $('.well');
  const $planPanes = $('.plan-pane');
  const $currentPlanPrice = $('.current-plan-price');

  // Initial setup
  const totalPanes = $panes.length;
  const totalPlanPanes = $planPanes.length;
  let visiblePanes = INITIAL_VISIBLE_PANES;

  if (totalPlanPanes > INITIAL_VISIBLE_PANES) {
    $seeMoreLink.show();
  }

  $panes.slice(0, visiblePanes).show().slideDown();

  $seeMoreLink.click(() => {
    visiblePanes = Math.min(visiblePanes + ADDITIONAL_PANES, totalPanes);
    $panes.slice(0, visiblePanes).show().slideDown();
    if ($panes.filter(':visible').length === totalPlanPanes) {
      $seeMoreLink.hide();
      $showLessLink.show();
    }
  });

  $showLessLink.click(() => {
    $panes.slice(INITIAL_VISIBLE_PANES).hide();
    $seeMoreLink.show();
    $showLessLink.hide();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // More-less pricing
  $('.well-bot').each(function() {
    const $this = $(this);
    const newPlanPrice = parseFloat($this.find('.change-price').text());
    const currentPrice = parseFloat($currentPlanPrice.text());
    const priceDiff = (currentPrice - newPlanPrice).toFixed(2);
    const priceMore = (newPlanPrice - currentPrice).toFixed(2);

    $this.find('.change-amt').text(currentPrice >= newPlanPrice ? priceDiff : priceMore);
    $this.find('.less-more').text(currentPrice >= newPlanPrice ? 'Less' : 'More');
  });
});
