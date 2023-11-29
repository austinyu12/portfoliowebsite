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

email.addEventListener('input', validateEmail);
//comments.addEventListener('input', validInput(input));

// function validateName() {
//     //console.log('validating name');
//     if (username.checkValidity()) {
//         console.log('Input is valid');
//         myInput.setCustomValidity();
//     }
//     else {
//         username.setCustomValidity('Must enter a name');
//     }
//     username.reportValidity();
// }

function validateEmail() {
    if (email.checkValidity()) {
        console.log('valid input');
    }
    else {
        console.log('invalid input');
    }
}

// function validComment(input) {

// }
