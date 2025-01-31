function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    
    // Konsolga yozish
    console.log("Login Username: " + username);
    console.log("Login Password: " + password);

    // Masalan, saqlangan ma'lumotlar bilan tekshiruv (bularni faqat xotiraga saqlash)
    if (username === "user" && password === "password123") {
        alert("Welcome back, " + username);
    } else {
        alert("Yaxshi 30minut kutib turing navbatingiz kelsa UC tushadi akkauntingizga");
    }

    return false; // Formaning yuborilmasligini ta'minlash
}

function register() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;

    // Konsolga yozish
    console.log("Register Username: " + username);
    console.log("Register Password: " + password);

    // Odatda ma'lumotlar serverga yuboriladi, ammo bu yerda faqat alert chiqarish bilan cheklanadi
    alert("Account created for " + username);

    // Formani tozalash
    document.getElementById('register').reset();

    // Login formaga qaytish
    showLogin();
    
    return false;
}

