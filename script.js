//
const textBox = document.querySelector(".text-box");
const copyBtn = document.querySelector(".copy-btn");
const slider = document.querySelector(".slider");
const genPasswordBtn = document.querySelector(".gen-password");
const sliderVal = document.querySelector(".slider-value");
sliderVal.textContent = slider.value;



function ran_password () {
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>/?';
    
    for (let i = 0; i < slider.value; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    textBox.value = password;
}


slider.addEventListener('input', function() {
    sliderVal.textContent = slider.value;
});

genPasswordBtn.addEventListener("click",ran_password)

copyBtn.addEventListener("click", function() {
    textBox.select();
    navigator.clipboard.writeText(textBox.value)
});



