export const registerTemplate = `
<form id="authorization-form" class="registration-form">
    <label for="name">Email</label>
    <input id="name" type="email" name="name">

    <label for="password">Password</label>
    <input id="password" type="password" name="password">

    <label for="confirmed-password">Confirm password</label>
    <input id="confirmed-password" type="password" name="confirmedPassword">
    <input id="submit-btn" type="submit" value="Register">
</form>
<span class="registration-link-span">
    Have an account?
    <a class="registration-link" href="#signin">Sign In</a>
</span>
`;