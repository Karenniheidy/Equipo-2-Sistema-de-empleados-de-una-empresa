let empleados = [];

const inicioSesion = () => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let vEmail = email.value;
    let vPassword = password.value;
    
    let listaEmpleados = JSON.parse(localStorage.getItem('empleados'));

    for (let i = 0; i < listaEmpleados.length; i = i + 1) {
        if (vEmail == listaEmpleados[i].email) {
            alert('Email escrito correctamente');
            if (vPassword == listaEmpleados[i].password) {
                alert('Contraseña escrita correctamente');
                console.log('Logeado correctamente');

                localStorage.setItem('usuarioLogeado', JSON.stringify(listaEmpleados[i]));
                window.location.href = 'dashboard.html';
            } else {
                alert('Contraseña incorrecta');
            }
        } else {
            alert('Email incorrecto');
        }
    }
}