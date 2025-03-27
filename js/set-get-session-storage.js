/*set session storage*/
$(document).ready(() => {
  $("#selectPlan").click(() => {
    const plan = document.getElementsByName('optionsRadios');
    let planValue;
    for (let i = 0; i < plan.length; i++) {
      if (plan[i].checked) {
        planValue = plan[i].value;
        sessionStorage.setItem("planType", planValue);
      }
    }
  });
});

/*retrieve session storage*/
$(document).ready(() => {
  const planName = sessionStorage.getItem("planType");
  if (planName === "option1") {
    $(".opt1").show();
    $(".opt2").hide();
  } else if (planName === "option2") {
    $(".opt2").show();
    $(".opt1").hide();
  }
});

/*
<div class="submit-wrap">
    <button id="selectPlan" class="btn-blue" onclick="window.location.href = '/'; omni_track('SelectThisPlan')">SELECT THIS PLAN</button>
</div>
*/
