window.onload = function () {

  alert("Bienvenidas al juego SMASH FACES");
};


$(document).ready(function() {
    
   $('h1').click(function(){
       
       $('h1').effect('bounce', {times:3}, 500);
   
   });
});


var numeroAlAzar;

var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

function enteroRandomEnRango(min,max){
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;

};

function desplegarNuevaJugada(){
  var tamanoArreglo = nombres.length;
  if(tamanoArreglo > 0){
     numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
     var imagen = 'fotos/' + imagenes[numeroAlAzar];
     $('#imagenPersona').attr('src', imagen);
   }else{
   alert ('Ganaste!!');
   }
};

$(document).ready(function(){

  $('#btnClick').click(function(){
    var nombre =$('#inputNombre').val();
    console.log( 'El usuario escribio:' + nombre);

    var nombreAAdivinar = nombres[numeroAlAzar];
    console.log( 'El nombre correcto es:' + nombreAAdivinar);

    if (nombre === nombreAAdivinar) {

       nombres.splice(numeroAlAzar, 1);
       imagenes.splice(numeroAlAzar, 1);


      desplegarNuevaJugada();
    } else{
      alert ('ERROR NOMBRE INCORRECTO')
    }
    

  });
    desplegarNuevaJugada();
});