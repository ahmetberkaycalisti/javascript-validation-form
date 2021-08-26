const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// (e) => {

// }

// show error function 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    // small.classList.add('error');
    small.setAttribute("class", "error")
    small.setAttribute("style", "display:block");
    small.innerText = message;
}

// show success
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.setAttribute("class", "success")
    small.setAttribute("style", "display:block");
    small.innerText = "This is could use."
}

// validate email function
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, "Email can not be use with that");
    }
}

// check required function
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        // console.log(input);
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is needed`);
        } else {
            showSuccess(input);
        }
    })
}


// check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        if (input.id == "password") {
            showError(input, `${getFieldName(input)} must be at least have 6 characters`);
        } else { 
            showError(input, `${getFieldName(input)} must be at least have 3 characters`);
        }
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than 25 characters`)
    } else {
        showSuccess(input)
    }
}

// get field name
function getFieldName(input) {
    // console.log("input.id.charAt(0)")
    // console.log(input.id.charAt(0))
    // console.log("input.id.slice(1)")
    // console.log(input.id.slice(1))
    // console.log(input.id.charAt(0).toUpperCase() + input.id.slice(1));
    
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check password

function checkPassword(input,input2) {
    if (input.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email)
    checkPassword(password, password2)
})



// // Event listeners
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     // console.log('click');
    
//     if (username.value.trim() === '') {
//         showError(username, 'Username can not be empty!')
//         username.value = ""
//     } else { 
//         showSuccess(username);
//     }
    
//     if (email.value.trim() === '') {
//         showError(email, 'Email can not be empty!')
//         email.value = ""
//     } else if (!isValidEmail(email.value)) {
//         showError(email, 'Email is not valid')
//     } else { 
//         showSuccess(email);
//     }
    
//     if (password.value.trim() === '') {
//         showError(password, 'Password can not be empty!')
//         password.value = ""
//     } else { 
//         showSuccess(password);
//     }
    
//     if (password2.value.trim() === '') {
//         showError(password2, 'Password can not be empty!')
//         password2.value = ""
//     } else { 
//         showSuccess(password2);
//     }

// })