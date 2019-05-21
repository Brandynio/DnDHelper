const createAccount = () => {
    let username = document.forms['create']['username'].value;
    let pass = document.forms['create']['pass'].value;
    let passConf = document.forms['create']['passConfirm'].value;
    if (pass !== passConf) {
        console.log("Passwords don't match");
    }
}