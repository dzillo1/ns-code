/*remove disable from submit btn if valid*/
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