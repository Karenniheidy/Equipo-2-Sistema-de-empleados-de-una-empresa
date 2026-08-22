let empleados = [];

const guardar = () => {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let cargo = document.getElementById('cargo');
    let area = document.getElementById('area');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let nuevoEmpleado = {
        nombre: nombre.value,
        apellido: apellido.value,
        cargo: cargo.value,
        area: area.value,
        email: email.value,
        password: password.value
    }

    empleados.push(nuevoEmpleado);
    localStorage.setItem('empleados', JSON.stringify(empleados));
    alert('Empleado guardado correctamente');
}