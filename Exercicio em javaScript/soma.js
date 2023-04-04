document.getElementById("Titulo").innerHTML = "Hello Word";

var obj1 = document.getElementById("Titulo2");
var n1 = 10;

function Soma(num1){;
    var x = num1 + 3;
    console.log(x);
    return x;
}

//obj1.innerHTML = Soma(n1);

function funcaoAdionaTitulo(){
    console.log("Antes do IF da funcaoAdionaTitulo!"); 
    if(obj1.innerText === "Título criado via JavaScript!"){
        return obj1.innerHTML = "Apaguei o título!";
    }else{
        return obj1.innerHTML = "<h1> Título criado via JavaScript! </h1>";
    }
}