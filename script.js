function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('background', 'var(--background-color-light)');
        root.style.setProperty('color', 'var(--text-color-light)');
    }
    else {
        root.style.setProperty('background', 'var(--background-color-dark)');
        root.style.setProperty('color', 'var(--text-color-dark)');
    }
}

function toggleTheme() {
    // console.log('toggled theme');
    const currTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currTheme==='light'?'dark':'light'
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = savedTheme;
    }
})

var username = document.getElementById('name');
var email = document.getElementById('email');
var comments = document.getElementById('comments');

// email.addEventListener('input', validateInput);

function validateInput(inputElement) {
    var inputValue = inputElement.value;
    var validPattern = /[a-zA-Z0-9\s.,!?';:@]+/;
    console.log('running');

    if (!validPattern.test(inputValue)) {
        // inputElement.value = inputValue.replace(/[a-zA-Z0-9\s.,!?';:@]+/g, '');
        //inputElement.preventDefault();
        this.setCustomValidity('You are inputting an invalid character.');
        console.log('invalid input');
    }
}

