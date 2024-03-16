/**
 * - Author: Rayne Gomes
 * - ref: https://github.com/raynegomes
 * - linkedin: https://www.linkedin.com/in/raynegomes
 * - date: March 10th, 2024
 * - subject: DOM - Manipulando elementos HTML com JavaScript, criando páginas dinâmicas
**/

const form = document.querySelector("form");
const input = form.querySelector("#txt-tarefa");
const ul = document.querySelector("ul");
const divError = document.querySelector(".msg-errors");
const divSemTarefas = document.querySelector(".sem-tarefas");

//Funcao para mostrar e ocultar div SEM TAREFAS
const mostrarDivSemTarefas = () => {
  divSemTarefas.style.display = "block";
}

const ocultarDivSemTarefas = () => {
  divSemTarefas.style.display = "none";
}

input.addEventListener('invalid', event => {
  event.preventDefault();
  const inputMsgError = "Insira um texto para a tarefa";
  
  divError.style.display = "block";
  divError.textContent = inputMsgError;

  input.focus();
});

//Submit do formulario
form.onsubmit = (event) => {
  if (!form.checkValidity()) return;
  event.preventDefault();
  
  //remove msg de error se houver
  divError.style.display = "none";
  divError.textContent = '';

  //remove msg sem tarefas no primeiro click
  ocultarDivSemTarefas();

  //pega o valor do campo de texto
  const novaTarefa = input.value;

  //clona o objeto default
  const cloneObj = ul.querySelector("li").cloneNode(true); //TRUE = clonar todos os elementos filhos
  cloneObj.classList.remove("hidden");
  cloneObj.querySelector("span").textContent = novaTarefa;
  ul.appendChild(cloneObj);

  input.value = "";
}

/*
// MODO MAIS DIFICIL 
const li = document.createElement("li");
li.setAttribute("class", "...");
li.textContent = novaTarefa;

const button = document.createElement("button");
button.setAttribute("class", "...");
button.textContent = "x";
li.appendChild(button);
ul.appendChild(li)
*/

// outro modo
// ul.innerHTML = `<li class="">${novaTarefa}<button>x</button></li>`;

//apagar item
ul.onclick = (event) => {
  // console.log(event.currentTarget);
  // console.log(event.target);
  var element = event.target;
  
  if(element.classList.contains('delete')){
    if(confirm("Deseja realmente apagar o item?")){
      element.parentElement.remove();

      //varifica se deve mostrar a div SEM TAREFAS
      if (ul.children.length == 1) {
        mostrarDivSemTarefas();
      }
    }
  }
}

//concluir tarefa
const concluirTarefa = (element) => {
  const classesDesativarBox = ["bg-slate-800", "border-slate-600", "shadow-slate-500/50"];
  const classesDesativarTexto = ["italic", "line-through", "text-slate-600"];

  if (element.checked) {
    element.parentElement.classList.add(...classesDesativarBox);
    element.parentElement.querySelector("span").classList.add(...classesDesativarTexto);
  }
  else {
    element.parentElement.classList.remove(...classesDesativarBox);
    element.parentElement.querySelector("span").classList.remove(...classesDesativarTexto);
  }
}
