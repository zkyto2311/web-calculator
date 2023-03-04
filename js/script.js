'use strict';

const switcher = document.querySelector('.switch');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Theme";
    } else {
        this.textContent = "Light Theme";
    }

    console.log('current class name: ' + className);
});

const result = document.querySelector(".result");  
function calculate() {
    result.value = new Function("return " + result.value)();
}