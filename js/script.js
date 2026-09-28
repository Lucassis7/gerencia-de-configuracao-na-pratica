const formulario =
document.getElementById("formulario");

const lista =
document.getElementById("lista");

formulario.addEventListener(
"submit",
function(event){

event.preventDefault();

const nome =
document.getElementById("nome").value;

const data =
document.getElementById("data").value;

const item =
document.createElement("li");

item.textContent =
`${nome} - ${data}`;

lista.appendChild(item);

});
