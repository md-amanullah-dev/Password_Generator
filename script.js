function generatePassword(length, includeUppercase, includeLowercase, includeNumber, includeSymbols) {
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const numberChar = '0123456789';
    const symbolsChar = '!@#$%^&*()_+';

    let charset = '';
    if (includeUppercase) charset += uppercaseChar;
    if (includeLowercase) charset += lowercaseChar;
    if (includeNumber) charset += numberChar;
    if (includeSymbols) charset += symbolsChar;


    if (charset === '') {
        alert('Please select at least one option for password complexity.');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];

    }
    return password;

}



const passwordDisplay = document.getElementById('passwordDisplay');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const passwordLenght = document.getElementById('passwordLenght');
const UppercaseCheckbox = document.getElementById('uppercaseCheckbox');
const lowercaseCheckbox = document.getElementById('lowercaseCheckbox ');
const numberCheckbox = document.getElementById('numberCheckbox');
const symbolsCheckbox = document.getElementById('symbolsCheckbox ');


generateButton.addEventListener("click", () => {
    const length = parseInt(passwordLenght.value);
    const includeUppercase = UppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumber = numberCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumber, includeSymbols);
    passwordDisplay.value = password;

});


copyButton.addEventListener("click", () => {
    passwordDisplay.select();
    document.execCommand("copy");
    alert("Password copy to clipboard");
});


