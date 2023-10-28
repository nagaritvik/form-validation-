const form=document.getElementById('form')
const fullname=document.getElementById('fullname')
const email=document.getElementById('email')
const phonenumber=document.getElementById('phonenumber')
const password=document.getElementById('password')
const confirm=document.getElementById('confirm')

function showError(input,message){
    const formControl= input.parentElement;
    formControl.className='form-control error'
    const small=formControl.querySelector('small');
    small.innerText=message
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(fullname.value === ''){
        showError(fullname,'fullname is required');
    }
    
})