//--------------------------Login Page Start  -----------------------
function loging() {
    
    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admin' && password === '123') {
        console.log(username , password);
        alert('Login successful!');
        window.location.href = 'dashboard.html'; 
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

//--------------------------Login Page End -----------------------