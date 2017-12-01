document.getElementById("contenido-menu").addEventListener("change",filtros);

function filtros(event){
  var selectedIndex=event.target.selectedIndex;
  var filtroAplicar=event.target[selectedIndex].dataset.filtro;

if (filtroAplicar == "sepia"){
  cambiarASepia();
}else if (filtroAplicar == "blanco-negro"){
  cambiarABlanco();
}else if (filtroAplicar == "invertir") {
  cambiarAInvertir();
}else if (filtroAplicar == "original"){
  cambiarAOriginal();
 }
}


function cambiarASepia(){
  var imagenes= document.getElementsByTagName("img");
  for(var i=0; i<imagenes.length; i++){
    imagenes[i].className="f-sep";
  }
}

function cambiarABlanco(){
  var imagenes= document.getElementsByTagName("img");
  for(var i=0; i<imagenes.length; i++){
    imagenes[i].className="f-bn";
  }
}

function cambiarAInvertir(){
  var imagenes= document.getElementsByTagName("img");
  for(var i=0; i<imagenes.length; i++){
    imagenes[i].className="f-invertir";
  }
}

function cambiarAOriginal(){
  var imagenes= document.getElementsByTagName("img");
  for(var i=0; i<imagenes.length; i++){
    imagenes[i].className="f-orig";
  }
}
