// ===============================
// BIENVENIDA MOON CENTER
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // Crear contenedor de bienvenida
    const welcome = document.createElement("div");
    welcome.classList.add("moon-welcome");

    welcome.innerHTML = `
        <h2>🌙 Bienvenido a Moon Center</h2>
        <p>Sesión Informática</p>
    `;

    document.body.appendChild(welcome);

    // Mostrar bienvenida
    setTimeout(() => {
        welcome.classList.add("show");
    }, 500);

    // Ocultar automáticamente
    setTimeout(() => {
        welcome.classList.remove("show");
    }, 4000);

    // Eliminar del DOM
    setTimeout(() => {
        welcome.remove();
    }, 5000);
});


// ===============================
// MENSAJE DEL BOTÓN
// ===============================
function mensajeImportancia() {
    const box = document.createElement("div");
    box.classList.add("moon-alert");

    box.innerHTML = `
        <h3>📘 ¿Por qué es importante la Informática?</h3>
        <p>
            La informática impulsa el desarrollo tecnológico,
            mejora la calidad de vida y permite crear soluciones
            innovadoras para el mundo actual.
        </p>
    `;

    document.body.appendChild(box);

    setTimeout(() => {
        box.classList.add("show");
    }, 100);

    setTimeout(() => {
        box.classList.remove("show");
    }, 3500);

    setTimeout(() => {
        box.remove();
    }, 4200);
}
