$(document).ready(function(){
  $("#botton-budget").buttonOfBudget();
  // el plugin de select_material es el que le da el estilo al select de esa manera
  // se envian dos valores para que pueda trabajar dicho plugin title que es el mensaje que aparece de referencia
   // y el nombre del select, no es necesario agregarlo en el html pero si es necesario mandarlo como atributo de la funcion
  $("#concesionarios").selectMaterial({title:"seleccione un concesionario",name:"concesionarios"});
});

$(document).on("focus",".material-design-input-group>input",function(){
  $("label[for="+$(this).attr("id")+"]").addClass("label-focus");
});
$(document).on("blur",".material-design-input-group>input",function(){
  $("label[for="+$(this).attr("id")+"]").removeClass("label-focus");
});
$(document).on("click",".material-design-select",function(){
  $(this).children("li").children("ul").toggleClass("show-menu");
});

$(document).on("click",".material-design-select > li >ul>li",function(){
  $(this).parent().parent().children("div").text($(this).text());
});

// el plugin de material creado tiene que atarse a un evento click
// y llamar a la funcion selectMaterialClick
$(document).on("click",".concesionarios",function(){
  $(this).selectMaterialClick();
});
