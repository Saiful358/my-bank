document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // user pass
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    console.log(userPass);

    if (userEmail == 'abc@hi.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }
});


