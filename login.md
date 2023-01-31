## Login
<br>

<form action="login()">
    Email: <input type="email" required>
    <br>
    <br>
    Password: <input type="password" required>
    <br>
    <br>
    <button>Login</button>
    <br>
    <a href="signup">No account? Sign up here</a>
</form>

<br>

<script>
    data = {email:"a@gmail.com",password:"a"};
fetch("https://crimebusterstest.tk/login/authenticate", {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)})
</script>