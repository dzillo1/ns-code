/*select reason dropdowns*/
$(".select-reason .current-value").click(function (event) {
    let $dropdown = $(this).closest(".select-reason");
    $(".select-reason .options").not($dropdown.find(".options")).slideUp("fast");
    $(".select-reason .current-value i").not($dropdown.find(".current-value i")).removeClass("rotate");
    $dropdown.find(".options").slideToggle("fast");
    $dropdown.find(".current-value i").toggleClass("rotate");
    event.stopPropagation(); 
});
$(".select-reason .opt").click(function (event) {
    let $dropdown = $(this).closest(".select-reason");
    let selectedText = $(this).html();
    $dropdown
        .find(".current-value")
        .html(selectedText + '<i class="bi bi-chevron-down"></i>')
        .addClass("select-color")
        .removeClass("unselect-color");
    $dropdown.find(".options").slideUp("fast");
    $dropdown.find(".current-value i").removeClass("rotate");
    event.stopPropagation();
});
$(".select-reason .opt-select").click(function (event) {
    let $dropdown = $(this).closest(".select-reason");
    $dropdown
        .find(".current-value")
        .html('Select Reason <i class="bi bi-chevron-down"></i>')
        .removeClass("select-color")
        .addClass("unselect-color");
    $dropdown.find(".options").slideUp("fast");
    $dropdown.find(".current-value i").removeClass("rotate");
    event.stopPropagation();
});
$("html").click(function () {
    $(".select-reason .options").slideUp("fast");
    $(".select-reason .current-value i").removeClass("rotate");
});
/*remove disable form submit btn if valid*/
document.addEventListener('DOMContentLoaded', function () {
    const itemCheckboxes = document.getElementsByClassName("form-check-input");
    const selectReasons = document.getElementsByClassName("current-value");
    const inputQtys = document.querySelectorAll('input[type="tel"]');

    function checkForm() {
        let formValid = false;
        for (let i = 0; i < itemCheckboxes.length; i++) {
            const checkboxChecked = itemCheckboxes[i].checked;
            const inputValue = inputQtys[i].value;
            const selectReasonText = selectReasons[i].innerText.trim();

            if (checkboxChecked && inputValue > 0 && selectReasonText !== "Select Reason") {
                formValid = true;
                break;
            }
        }
        if (formValid) {
            removeSubmitDisable();
        } else {
            addSubmitDisable();
        }
    }
    function removeSubmitDisable() {
        const submitBtn = document.getElementById("reportIssueSubmit");
        submitBtn.removeAttribute("disabled");
    }
    function addSubmitDisable() {
        const submitBtn = document.getElementById("reportIssueSubmit");
        submitBtn.setAttribute("disabled", "true");
    }
    for (let i = 0; i < itemCheckboxes.length; i++) {
        itemCheckboxes[i].addEventListener('change', checkForm);
        inputQtys[i].addEventListener('input', checkForm);
    }
    const dropdownOptions = document.querySelectorAll('.select-reason .opt');
    dropdownOptions.forEach(option => {
        option.addEventListener('click', function() {
            setTimeout(checkForm, 100);
        });
    });
});


/*confirmation checkbox - remove submit button disable */
document.getElementById('confirmation').addEventListener('change', function() {
    var submitButton = document.getElementById('submitRequest');
    if (this.checked) {
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }
});

/*toggle collapse text - view items*/
document.addEventListener('DOMContentLoaded', function() {
    var viewItemsCollapse = document.getElementById('viewItemsIssue');
    var toggleText = document.querySelector('.view-items-col .toggle-text');
    viewItemsCollapse.addEventListener('show.bs.collapse', function () {
        toggleText.textContent = 'Hide Items';
    });
    viewItemsCollapse.addEventListener('hide.bs.collapse', function () {
        toggleText.textContent = 'View Items';
    });
});
