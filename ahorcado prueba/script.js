document.addEventListener("DOMContentLoaded",function(){


  let palabras = ["Gato","Perro","Rana","Caballo","Pajaro","Vaca","Tigre","Leon","Jaguar","Loro","Pez","Raton","Rata","Paloma","Camaron","Koala","Dinusoario","Mapache","Pollo","Cerdo"];
  
  let frase = null;
  let mostrarFrase = [];
  let usuario = 0;
   let errores = 0;
  let parteDelCuerpo = 0;
  let letrasAdivinadas = new Set();
  function  mostrarFraseCompleta() {
    mostrarFrase = frase;
    eliminarDiv("letra");
    mostrarFraseAleatoria();
    
  };
  function actualizarFraseAleatoria() {
    letrasCoinciden();
    eliminarDiv("letra");
    mostrarFraseAleatoria();
    verificarPalabra();
  };
  function mostrarFraseAleatoria() {
    for (var i = 0; i < mostrarFrase.length; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "letra");
      div.setAttribute("id", "l" + (i));
      div.innerHTML = mostrarFrase[i];
      document.getElementById("letras").appendChild(div);
      if (mostrarFrase[i] === " ") {
        document.getElementById("l" + i).style.cssText = "border-bottom: 3px solid black;";
      } else {
        document.getElementById("l" + i).style.cssText = "";
      }
    }
  };
  function letrasCoinciden() {
    if (usuario[1] === undefined) {
      var noCoincidencia = 0;
      for (var i = 0; i < frase.length; i++) {
        if (frase[i].toUpperCase() === usuario) {
          mostrarFrase[i] = frase[i];
        } else {
          noCoincidencia++;
        }
      }
      if(noCoincidencia === mostrarFrase.length) {
          agregarPartesCuerpo()
        }
    }
  };
    function verificarPalabra() {
    if (usuario == frase.toUpperCase() || mostrarFrase.join("") === frase) {
      parteDelCuerpo = errores;
      errores = 7;
      agregarPartesCuerpo();
      
      alert("Felicidades Ganaste ");
    } else {
      
    }
  };

    function onClick(event) {
      var letraSeleccionada = event.target.innerHTML;
      onSubmit(letraSeleccionada);
      event.target.disabled = true;
      document.getElementById("alfa" + letraSeleccionada).removeEventListener("click", onClick);
  
    };
    function onSubmit(entradaLetra) { 
    if (entradaLetra === "input") {     
      usuario = document.getElementById("input").value.toUpperCase();
      document.getElementById("input").value = "";   
     
    } else {
      usuario = entradaLetra;
    }
    actualizarFraseAleatoria(usuario);
  
    if (usuario.length === 1) {
      document.getElementById("alfa" + usuario).style.cssText = "background-color: #107a5a; color: black;";     
    }
    
  };
  
  

  

   function mostrarLetras ()  {    
    var  alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (var i = 0; i < alfabeto.length; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "variableLetra");
      div.setAttribute("id", "alfa" + (alfabeto[i]));
      div.addEventListener("click", onClick); 
      div.innerHTML = alfabeto[i];
      document.getElementById("todasLasLetras").appendChild(div);    
    }
  };
   function  palabraAleatoria()  {
    frase = palabras[Math.floor(Math.random() * palabras.length)];
    for (var i = 0; i < frase.length; i++) {
      if (frase[i].match(/[a-z]/i)) {
        mostrarFrase.push("");
      } else {
        mostrarFrase.push(frase[i]);
      }
    }
    console.log(frase);
  };
    function eliminarDiv(elementosClase) {
    var letters = document.getElementsByClassName(elementosClase);
    while(letters[0]) {
      letters[0].parentNode.removeChild(letters[0]);
    }
  };
    
   
  
 

     function estilo(cssSelector, estilo) {
    var e = document.querySelectorAll(cssSelector);
    for(var i = 0; i < e.length; i++) {
      e[i].style.cssText = estilo;
    };
  };


  
    function agregarPartesCuerpo() {
    errores++;
    switch(errores) { 
      case 1:
        estilo(".oportunidad1", "opacity: 1;");
        break;
      case 2:
        estilo(".oportunidad2", "opacity: 1; ");
        break;
      case 3:
        estilo(".oportunidad3", "opacity: 1; ");
        break;
      case 4:
        estilo(".oportunidad4", "opacity: 1; ");
        break;
      case 5:
        estilo(".oportunidad5", "opacity: 1; ");
        break;
      case 6:
        estilo(".oportunidad6", "opacity: 1; ");
        break;
      case 7:
          estilo(".oportunidad7", "opacity: 1; ");
        mostrarFraseCompleta();
        alert("intentalo de nuevo presiona otra letra para reiniciar el juego");    
       
        break;
      case 8:
          
          eliminarDiv("letra");
        
          resetearJuego();

        break;
       
      default:
        alert("ERROR");
        break;
    }
  };
  

   
   


    
  inicializar();
  
  function inicializar() {
   
    palabraAleatoria();
    mostrarFraseAleatoria();
    mostrarLetras();
    
  };
  
  function resetearJuego() {
    document.getElementById("perderGraficado").style.cssText = "opacity: 0;";
    document.getElementById("contenedorGraficado").style.cssText = "opacity: 1;";
        estilo(".oportunidad1", "opacity: 0; ");
        estilo(".oportunidad2", "opacity: 0; ");
        estilo(".oportunidad3", "opacity: 0; ");
        estilo(".oportunidad4", "opacity: 0; ");
        estilo(".oportunidad5", "opacity: 0; ");
        estilo(".oportunidad6", "opacity: 0; ");
        estilo(".oportunidad7", "opacity: 0; ");

        frase = null;
        mostrarFrase = [];
        usuario = null;
        errores = 0;
        parteDelCuerpo = 0;
        eliminarDiv("variableLetra");
        inicializar();
  
  };
});



 
  



