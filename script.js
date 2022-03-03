const submitFormData = (event) => {
    event.preventDefault();

    let form = document.forms["questionnaire-form"];

    let nameInput = form.elements["name-input"];
    let phoneInput = form.elements["phone-input"];
    let passwordInput = form.elements["password-input"];

    let inputsArr = [nameInput, phoneInput, passwordInput];

    let checkedRadio = getCheckedRadioButton("work-radio");

    if (nameInput.value.trim() === ''
        || phoneInput.value.trim() === ''
        || passwordInput.value.trim() === ''
        || checkedRadio === null) {
        alert("Please input data");

        checkInputs(inputsArr);
    } else {
        checkInputs(inputsArr);

        clearForm(form);
    }
};

const getCheckedRadioButton = (name) => {
    let radioButtons = document.getElementsByName(name);

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i];
        }
    }

    return null;
};

const checkInputs = (inputs) => {
    for (let i = 0; i < inputs.length; i++) {
        checkInputField(inputs[i]);
    }
};

const checkInputField = (inputField) => {
    if (inputField.value.trim() === '') {
        inputField.style.border = "1px solid #E42D2D";
    } else {
        inputField.style.border = "1px solid rgba(0, 0, 0, 0.2)";
    }
};

const clearForm = (form) => {
    form.reset();
};