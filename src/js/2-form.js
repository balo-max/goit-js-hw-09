const feedbackForm = document.querySelector('.feedback-form'); 

let formData = {
    email: "",
    message: "",
};

const fillFormFields = () => {
    try {
        if (localStorage.length === 0) {
            return;
        }

        const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

        formData = formDataFromLS;

        for (const key in formDataFromLS) {
            feedbackForm.elements[key].value = formDataFromLS[key];
        }
    } catch (error) {
        console.log(error);
    }
};

fillFormFields();

const onFormFieldChange = event => {
    const { target: formFieldEl } = event;

    const fieldValue = formFieldEl.value;
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    const { currentTarget: formEl } = event;

     if (!formEl.elements.email.value || !formEl.elements.message.value) {
         alert('Fill please all fields');
         return;
    }

    console.log(formData);
    
    formEl.reset(); 
    localStorage.removeItem('feedback-form-state');
}

feedbackForm.addEventListener('input', onFormFieldChange);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
