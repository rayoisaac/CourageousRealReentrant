



(function (){

    //variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");
    var cantchild = lista.children.length;




    //funciones
    var agregarTarea = function (){

        var tarea = tareaInput.value;
        var nuevaTarea = document.createElement("li");
        var enlace = document.createElement("a");
        var contenido = document.createTextNode( lista.children.length+1+" "+tarea);


        if(tarea == ""){

            tareaInput.setAttribute("placeholder", "agrega una tarea valida");
            tareaInput.className = "error";
            return false;

        }

        //aqi mete el contenido del texto del label en una etiqueta "<a>" 
        enlace.appendChild(contenido);
        //aqui se le atribuye un atributo "href"  a la etiqueta <a>
        enlace.setAttribute("href", "#");
        //aqui se mete la etique "<a> con sus propiedades (osea ya terminada) dentro de la etiqueta  <li>"
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);
        tareaInput.value="";

        for ( var i = 0; i <= lista.children.length ; i++ ){   ///*** AQUI EL PROBLEMA ES QUE NO ME DEJA USAR LA FUNCION lista.children.length; POR LO CUAL ME HE TENIDO QUE CREAR UNA VARIABLE Y PONERLA EN EL CICÑLO FOR*/ 

            lista.children[i].addEventListener("click", eliminarTarea);
    
    
        }





        alert('agregando tarea '+ tarea );
        
    };

    var comprobarInput = function () {
        //alert(' comprando tarea'+ cantchild);
        tareaInput.className="";
        tareaInput.setAttribute("placeholder", "agrega tu tarea");

    };

    var eliminarTarea = function () {

        this.parentNode.removeChild(this);
        alert('elimninando tarea ');








    };


    


    //eventos

    
    btnNuevaTarea.addEventListener("click", agregarTarea);//agregar tarea
    tareaInput.addEventListener("click", comprobarInput);///input error
    
    
    ///eliminar tarea
   for ( var i = 0; i <= lista.children.length ; i++ ){   ///*** AQUI EL PROBLEMA ES QUE NO ME DEJA USAR LA FUNCION lista.children.length; POR LO CUAL ME HE TENIDO QUE CREAR UNA VARIABLE Y PONERLA EN EL CICÑLO FOR*/ 

        lista.children[i].addEventListener("click", eliminarTarea);


    }












}());