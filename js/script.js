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

item.innerHTML =
`${nome} - ${data}
<button class="remover">
Cancelar
</button>`;

lista.appendChild(item);

const botao =
item.querySelector(".remover");

botao.addEventListener(
"click",
function(){
item.remove();
});

});
