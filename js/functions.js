const form = document.querySelector("form"); //aqui eu criei uma variável
//const input = form.querySelector("input[type=text]");
const input = form.querySelector("#txt-tarefa");
const ul = document.querySelector("ul");

//onsubmit é um evento, ele vai me retornar um evento de algo
form.onsubmit = (event) => { //retirei o comportamento padrão e coloquei um comportamento para o js
    event.preventDefault();
    //alert("Ops"); // agora ele trabalha como eu quero
    //alert(input.value);
    const novaTarefa = input.value;
    //Sempre vai pegar o primeiro elemento
    const clonElement = ul.querySelector("li").cloneNode(true);
    clonElement.querySelector("span").textContent = novaTarefa;
    ul.appendChild(clonElement);
    input.value = "";
};

ul.onclick = (event) =>{
    //console.log(event.currentTarget);
    //console.log(event.target);
    const element = event.target;

    if(element.classList.contains("delete")){
        //apagar um elemento
        if(confirm("Deseja de fato apagar?")){
            //visitou quem esta acima do elemento
            console.log(element.preventElement);
            alert("Sim, com certeza");
            element.preventElement.remove();

        }   
    }

    if(ul.children.length == 1 ){

    }
};

//window.location.protocol
//location.protocol
//location.pathname
//window.location.pathname
//history.back()
//document.querySelector("#text").value
//w3school.com
