export const signinTemplate = `
<form id="authorization-form" class="registration-form">
    <label for="name">Email</label>
    <input id="name" type="email" name="name">

    <label for="password">Password</label>
    <input id="password" type="password" name="password">

    <input id="submit-btn" type="submit" value="Sign in">
</form>
<span class="registration-link-span">
        No account?
        <a class="registration-link" href="#register">Sign Up</a>
</span>
`;