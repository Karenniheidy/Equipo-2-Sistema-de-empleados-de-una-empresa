let usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
let dashboard = document.getElementById('dashboard');

if (usuario.cargo == 'Gerente') {
    dashboard.innerHTML = '<h3>Dashboard Gerente</h3><ul><li>Reportes generales</li><li>Gestión de empleados</li><li>Indicadores de la empresa</li></ul>';
} else if (usuario.cargo == 'Supervisor') {
    dashboard.innerHTML = '<h3>Dashboard Supervisor</h3><ul><li>Control de equipos</li><li>Seguimiento de actividades</li><li>Reportes del área</li></ul>';
} else if (usuario.cargo == 'Empleado') {
    dashboard.innerHTML = '<h3>Dashboard Empleado</h3><ul><li>Información personal</li><li>Tareas asignadas</li><li>Solicitudes</li></ul>';
}