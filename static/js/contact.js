let btnSend = document.querySelector("#btn-send");
let control = 0
//ESCUCHAR UN EVENTO
btnSend.addEventListener('click', function () {
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let textarea = document.querySelector("#textarea");
    let reason = document.getElementById('reason');
    //Expresiones regulares

    let carreras = document.getElementById("carreras");
    let mmorpg = document.getElementById("mmorpg");
    let moba = document.getElementById("moba");
    let plataforma = document.getElementById("plataforma");
    let rpg = document.getElementById("rpg");
    let shooter = document.getElementById("shooter");
    let otro = document.getElementById("otro");




    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(firstname.value.trim().length);
    if (firstname.value.trim() == '' || firstname.value.trim().length < 3) {
        document.querySelector("#error-firstname").innerHTML = "Debes completar el campo Nombre";
        control = control + 1;
        //control de nombre
    }


    if (lastname.value.trim() == '' || lastname.value.trim().length < 3) {
        document.querySelector("#error-lastname").innerHTML = "Debes completar el campo Apellido";
        control = control + 1;
        //control de apellido
    }

    if (!emailRegex.test(email.value)) {
        document.querySelector("#error-email").innerHTML = "El email no tiene un formato valido.";
        control = control + 1;
        //control de email
    }


    if (reason.value == "") {
        document.querySelector("#error-reason").innerHTML = `Selecciona un motivo del contacto.`;
        control = control + 1;
        //control de motivo
    }


    if (textarea.value.trim() == '') {
        document.querySelector("#error-message").innerHTML = "Debes completar el campo de texto";
        control = control + 1;
        //control de mensaje texto
    }


    if (carreras.checked == false & mmorpg.checked == false & moba.checked == false & plataforma.checked == false & rpg.checked == false & shooter.checked == false & otro.checked == false) {
        document.querySelector("#error-gender").innerHTML = "selecciona una opcion";
        control = control + 1;
    }







    if (control == 0) { window.open('../index.html', '_self'); }
    control = 0; //reinicia el control
    //controla que no exista error para continuar

});