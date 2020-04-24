webPdExamples.init()

var patch 
$.get('pd/main2.pd', function(mainStr) {
  // Loading the patch
  patch = Pd.loadPatch(mainStr)
  webPdExamples.patchLoaded(mainStr)
}) 

function nuevasNotas(){
  Pd.send("activarNotas", "bang");
}    

//amp
$(document).on('input', '#amp', function() {
  let rangeAmp = $('#amp').val() ;
  Pd.send("amp", [ parseFloat(rangeAmp) ] );
  console.log(rangeAmp+" -> [r amp]");
  setAmpLabel(rangeAmp);
});
function setAmpLabel (ampi){
  $("#ampLabel").empty();
  $("#ampLabel").append("Amp: "+ampi);
}


//array
function leerArray(){
  Pd.send("leerArray", "bang" );
} 
function grabarArray(){
  Pd.send("grabarArray", "bang");
}    
$(document).on('input', '#ampArray', function() {
  let rangeAmp = $('#ampArray').val() ;
  Pd.send("ampArray", [ parseFloat(rangeAmp) ] );
  console.log(rangeAmp+" -> [r ampArray]");
  ampArrayLabel(rangeAmp);
});
function ampArrayLabel (ampi){
  $("#ampArrayLabel").empty();
  $("#ampArrayLabel").append("ampArray: "+ampi);
}