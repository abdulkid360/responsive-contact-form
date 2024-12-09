
const resetForm = (event) => {
    const form = document.getElementById('my-form'); // Change 'myForm' to your form ID  
    form.reset(); // Reset the form fields
    document.querySelector('.check-image').style.display = "none";
    document.querySelector('.custom-check').style.display = "block";



    document.querySelectorAll('.query').forEach(cont => {
        cont.querySelector('.radio-label').classList.remove('radio-check');
        cont.querySelector('.radio-image').style.display = 'none';
        cont.querySelector('.custom-radio').style.display = 'block';
    });
};

const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission  

    // Call your validation logic  
    controlValidation();

    if (validationErrors() === 0) {
        const alertBox = document.querySelector('.custom-alert');

        // Show the alert box  
        alertBox.classList.add('show-alert');
        alertBox.scrollIntoView({ behavior: 'smooth' });

        resetForm();

        // Set a timeout to hide the alert box  
        setTimeout(() => {
            alertBox.classList.remove('show-alert');
        }, 4000);
    }
};
document.querySelector('#submit').addEventListener('click', handleSubmit)

const setError = (element, message = "This field is required") => {
    let parentElement;
    if (element.classList.contains('row')) {
        element.querySelector('.error').style.display = 'block';
        element.querySelector('.error').innerText = message;
    } else if (element.type === 'checkbox') {
        parentElement = element.parentElement.parentElement;
        parentElement.querySelector('.error').style.display = 'block';
        parentElement.querySelector('.error').innerText = message;
    } else {
        parentElement = element.parentElement;
        parentElement.querySelector('.error').style.display = 'block';
        parentElement.querySelector('.error').innerText = message;
        element.classList.add('error-border');
    }

}

const removeError = (element) => {
    let parentElement;
    if (element.classList.contains('row')) {
        element.querySelector('.error').style.display = 'none';
    } else if (element.type === 'checkbox') {
        parentElement = element.parentElement.parentElement;
        parentElement.querySelector('.error').style.display = 'none';
    } else {
        parentElement = element.parentElement;
        parentElement.querySelector('.error').style.display = 'none';
        element.classList.remove('error-border');
    }

}

const controlValidation = () => {
    const inputs = document.querySelectorAll('.input')

    inputs.forEach(input => {
        if (input.name === 'email') {
            if (input.value.trim() === "") {
                setError(input)
                input.scrollIntoView({ behavior: 'smooth' });
            } else if (validateEmail(input.value) === false) {
                setError(input, "Please enter a valid email address");
                input.scrollIntoView({ behavior: 'smooth' });
            } else {
                removeError(input)
            }
        } else if (input.classList.contains('row')) {
            const isChecked = input.querySelector('input[name="query"]:checked')

            if (isChecked === null) {
                setError(input, "Please select a query type");
                input.scrollIntoView({ behavior: 'smooth' });
            } else {
                removeError(input)
            }
        } else if (input.type === 'checkbox') {
            if (input.checked != true) {
                setError(input, "To submit this form, please consent to being contacted")
                input.scrollIntoView({ behavior: 'smooth' });
            } else {
                removeError(input)
            }
        } else {
            if (input.value.trim() === "") {
                setError(input)
                input.scrollIntoView({ behavior: 'smooth' });
            } else {
                removeError(input)
            }
        }
    })

}


const validationErrors = () => {
    const allErrors = Array.from(document.querySelectorAll('.error'));
    const errorList = allErrors.filter(error => error.style.display === 'block')

    return errorList.length;
}

const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}