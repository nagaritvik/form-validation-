const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm');
const phonenumber=document.getElementById('phonenumber');
// show input error message




function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}


// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}


//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}


//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}


//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}


// check passwords match


function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}
function checkstrong(input1,input2)
{
    if(input1.value === 'password')
    {
        showError(input1,'Not strong');
    }    
    if(input1.value === input2.value)
    {
        showError(input1,'Not strong');
    }    
}
// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkphonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
    {
          return true;
    }
    else
    {
        showError(inputtxt,'Invalid');
        return false;
    }
}


function checkph(input)
{
    if(input.value === '123456789')
    {
        showError(input,'Invalid contact');
    }
}
// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();


  checkRequired([fullname, email, password, password2,phonenumber]);
  checkLength(fullname, 5, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  checkphonenumber(phonenumber);
  checkstrong(password,fullname);
  checkph(phonenumber);
});
