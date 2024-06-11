let btnSend = document.querySelector("#btn-send");
let control = 0
//ESCUCHAR UN EVENTO
btnSend.addEventListener('click', function () {
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    //Expresiones regulares
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(firstname.value.trim().length);
    if (firstname.value.trim() == '' || firstname.value.trim().length < 3) {
        document.querySelector("#error-firstname").innerHTML = "Debes completar el campo Nombre";
        control = control + 1;
        setTimeout(function(){
            document.querySelector("#error-firstname").innerHTML =  "";;
        }, 5000);
        //control de nombre
    }


    if (lastname.value.trim() == '' || lastname.value.trim().length < 3) {
        document.querySelector("#error-lastname").innerHTML = "Debes completar el campo Apellido";
        control = control + 1;
        setTimeout(function(){
            document.querySelector("#error-lastname").innerHTML =  "";;
        }, 5000);
        //control de apellido
    }

    if (!emailRegex.test(email.value)) {
        document.querySelector("#error-email").innerHTML = "El email no tiene un formato valido.";
        control = control + 1;
        setTimeout(function(){
            document.querySelector("#error-email").innerHTML =  "";;
        }, 5000);
        //control de email
    }

    console.log(password.value.trim().length);
    if (password.value.trim() == '' || password.value.trim().length < 3) {
        document.querySelector("#error-password").innerHTML = "Debes completar el campo password";
        control = control + 1;
        setTimeout(function(){
            document.querySelector("#error-password").innerHTML =  "";;
        }, 5000);
        //control de contraseña
    }

    if (control == 0) { window.open('login.html', '_self'); }
    control = 0; //reinicia el control
    //controla que no exista error para continuar

});