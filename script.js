
console.log("Conectado");


const estilo = "background:#065a82; color:white; font-weight:bold; padding:4px 10px; border-radius:4px;";
function seccion(texto) {
  console.log("%c" + texto, estilo);
}

seccion("1.2 · Arreglos");

const colores = ["rojo", "verde", "azul"];

console.log(colores[0]);        // "rojo"  → el índice empieza en 0
console.log(colores[2]);        // "azul"  → el último es length - 1
console.log(colores.length);    // 3

colores.push("amarillo");       // agrega al final
console.log(colores);           // ["rojo", "verde", "azul", "amarillo"]
console.log(colores.length);    // 4 → length se actualiza solo

colores[1] = "turquesa";
console.log(colores);           // ["rojo", "turquesa", "azul", "amarillo"]


const secciones = ["Sobre mí", "Mis intereses", "Mis avances", "Contáctame"];

for (let i = 0; i < secciones.length; i++) {
  console.log("Sección " + (i + 1) + ": " + secciones[i]);
}


seccion("1.3 · Objetos");

const estudiante = {
  nombre: "Astrid",
  edad: 21,
  nivel: "intermedio",
};


console.log(estudiante.nombre);       
console.log(estudiante["edad"]);      


const queQuieroVer = "nivel";
console.log(estudiante[queQuieroVer]); // "intermedio"


estudiante.nivel = "avanzado";
estudiante.curso = "Programación Web Básica";
console.log(estudiante);

seccion("1.3 · Arreglo de objetos: Mis avances");

const avances = [
  { lenguaje: "HTML", nivel: "Básico", meses: 1 },
  { lenguaje: "CSS", nivel: "Principiante", meses: 0 },
  { lenguaje: "JavaScript", nivel: "Sin empezar", meses: 0 },
];

for (let i = 0; i < avances.length; i++) {
  // avances[i] es UN objeto; con punto leemos cada propiedad.
  console.log(avances[i].lenguaje + " → " + avances[i].nivel + " (" + avances[i].meses + " meses)");
}

            
seccion("1.4 · El DOM de mi landing page");


seccion("2.2 · Ejemplo guiado");

const titulo = document.querySelector("h1");
console.log(titulo);               // el elemento completo: <h1>Mi Página Personal</h1>
console.log(titulo.textContent);   // solo su texto: "Mi Página Personal"

const enlaces = document.querySelectorAll("nav a");
console.log(enlaces.length);       // 5 enlaces en el menú

for (let i = 0; i < enlaces.length; i++) {
  console.log("Enlace " + (i + 1) + ": " + enlaces[i].textContent);
}


seccion("Ejercicio 1 · Secciones del main");

for (let i = 0; i < secciones.length; i++) {
  console.log(secciones[i]);
}


seccion("Ejercicio 2 · Mi perfil");

const perfil = {
  nombre: "Astrid",
  curso: "Programación Web Básica",
  nivel: "Intermedio",
};

console.log("Nombre: " + perfil.nombre);
console.log("Curso: " + perfil.curso);
console.log("Nivel: " + perfil.nivel);


seccion("Ejercicio 3 · Mi h1");

const miTitulo = document.querySelector("h1");
console.log(miTitulo.textContent);


                    
seccion("Ejercicio 4 · Mis intereses");

const intereses = document.querySelectorAll("ul li");
console.log("Tengo " + intereses.length + " intereses");

for (let i = 0; i < intereses.length; i++) {
  console.log("• " + intereses[i].textContent);
}


seccion("Ejercicio 5 · El elemento .destacado");

const destacado = document.querySelector(".destacado");
console.log(destacado);
console.log("Texto destacado: " + destacado.textContent);


const noExiste = document.querySelector(".no-existe");
console.log("¿Encontró .no-existe?", noExiste);   // null


seccion("Clase 12 · 1.2 Modificar contenido");
 
const badge = document.querySelector(".badge-js");
badge.textContent = "⚡ JavaScript activo · la página ya reacciona a tus clics";
 
const saludo = document.querySelector("#saludo");
saludo.innerHTML = "👋 ¡Hola! Esta página ya <strong>reacciona</strong>: " +
                   "prueba el modo oscuro, marca tus intereses favoritos y envía el formulario.";
 
console.log("Saludo (solo texto):", saludo.textContent);
 

seccion("Clase 12 · 1.2 Modificar estilos");
 

badge.style.backgroundColor = "#1c6b5f";
badge.style.color = "white";
 

seccion("Clase 12 · 1.3 Evento click: modo oscuro");
 
const botonTema = document.querySelector("#btn-tema");
 
botonTema.addEventListener("click", function () {

  document.body.classList.toggle("modo-oscuro");
 
  if (document.body.classList.contains("modo-oscuro")) {
    botonTema.textContent = "☀️ Modo claro";
  } else {
    botonTema.textContent = "🌙 Modo oscuro";
  }
 
  console.log("Modo oscuro activo:", document.body.classList.contains("modo-oscuro"));
});
 
 
seccion("Clase 12 · 1.3 Evento click: intereses favoritos");
 
const contadorFavoritos = document.querySelector("#contador-favoritos");
 
function actualizarContador() {
  const favoritos = document.querySelectorAll("ul li.favorito");
  if (favoritos.length === 0) {
    contadorFavoritos.textContent = "";   
  } else {
    contadorFavoritos.textContent = "★ " + favoritos.length + " favorito(s)";
  }
}
 
for (let i = 0; i < intereses.length; i++) {
  intereses[i].addEventListener("click", function () {
    
    intereses[i].classList.toggle("favorito");
    actualizarContador();
    console.log("Clic en: " + intereses[i].textContent);
  });
}
 
seccion("Clase 12 · 2.1 Validación del formulario");
 
const formulario = document.querySelector("form");
const nombreInput = document.querySelector("#nombre");
const correoInput = document.querySelector("#correo");
const mensajeError = document.querySelector("#mensaje-error");
 
formulario.addEventListener("submit", function (event) {
  event.preventDefault();   

  mensajeError.classList.remove("error", "exito");
  nombreInput.classList.remove("campo-error");
  correoInput.classList.remove("campo-error");
 
  if (nombreInput.value === "") {
    mensajeError.textContent = "✖ El nombre es obligatorio.";
    mensajeError.classList.add("error");
    nombreInput.classList.add("campo-error");
    nombreInput.focus();  
 
  } else if (!correoInput.value.includes("@")) {

    mensajeError.textContent = "✖ El correo debe incluir una @ (ejemplo: nombre@correo.com).";
    mensajeError.classList.add("error");
    correoInput.classList.add("campo-error");
    correoInput.focus();
 
  } else {

    mensajeError.textContent = "✔ ¡Gracias, " + nombreInput.value + "! Tu mensaje fue enviado correctamente.";
    mensajeError.classList.add("exito");
  }

  console.log("Formulario revisado · nombre:", nombreInput.value, "· correo:", correoInput.value);
});
 
seccion("Clase 12 · Reto: evento input");
 
const mensajeTexto = document.querySelector("#mensaje");   
const contadorMensaje = document.querySelector("#contador-mensaje");
 
mensajeTexto.addEventListener("input", function () {
  
  contadorMensaje.textContent = mensajeTexto.value.length + " caracteres";
});
 
formulario.addEventListener("reset", function () {
  mensajeError.textContent = "";
  mensajeError.classList.remove("error", "exito");
  nombreInput.classList.remove("campo-error");
  correoInput.classList.remove("campo-error");
  contadorMensaje.textContent = "0 caracteres";
});
 
console.log("%c¡Clase 12 completa! La página ya cambia, escucha eventos y valida el formulario.",
  "color:#3fb8af; font-weight:bold;");
