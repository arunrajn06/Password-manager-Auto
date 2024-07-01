document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('save').addEventListener('click', savePassword);
document.getElementById('view').addEventListener('click', loadPasswords);

function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById('password').value = password;
    console.log("Generated Password:", password);
}

function savePassword() {
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (website && username && password) {
        const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
        passwords.push({ website, username, password });
        localStorage.setItem('passwords', JSON.stringify(passwords));
        console.log("Saved Passwords to LocalStorage:", passwords);
        
        document.getElementById('website').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        alert("Password saved successfully!");
    } else {
        alert('Please enter all fields and generate a password.');
    }
}

function loadPasswords() {
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    console.log("Loaded Passwords from LocalStorage:", passwords);

    if (passwords.length > 0) {
        let passwordList = 'Saved Passwords:\n';
        passwords.forEach(entry => {
            passwordList += `Website: ${entry.website}, Username: ${entry.username}, Password: ${entry.password}\n`;
        });
        alert(passwordList);
    } else {
        alert('No passwords saved.');
    }
}
