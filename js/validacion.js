function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

    document.getElementById('regBtn').addEventListener('click', function() {
        // Obtiene los valores de los campos requeridos
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let email = document.getElementById('email').value;
        let password1 = document.getElementById('password1').value;
        let password2 = document.getElementById('password2').value;
        let terminos = document.getElementById('terminos').checked;
    // Verifica si algún campo está vacío
if (nombre == "" || apellido == "" || email == "" || password1 == "" || password2 == "" || password1 !== password2 || password1.length < 6 || !terminos) {
    showAlertError(); // Mostrar error
} else { // Si todas las validaciones son correctas
    showAlertSuccess(); // Muestra alerta de envío exitoso
}
});
