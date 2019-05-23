var bcrypt = require('bcrypt-nodejs');
var myHash;

const createAccount = () => {
    let username = document.forms['create']['username'].value;
    let pass = document.forms['create']['pass'].value;
    let passConf = document.forms['create']['passConfirm'].value;
    if (pass !== passConf) {
        console.log("Passwords don't match");
    }
    else{
        makeHash(pass);
    }
}

const logIn = () => {
    let username = document.forms['login']['username'].value;
    let password = document.forms['login']['password'].value;
}

const makeHash = (the_str) => {
    bcrypt.hash(the_str, null, null, function(err, hash){
      myHash = hash;
    });
    
  }