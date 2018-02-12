jQuery.fn.selectMaterial =function(options){
// son tres atributos si no se envian el plugin no  trabajara, los atributos son
// name, title y id del select
    var options=$.extend({},options);
    this.each(function(){

      var val = jQuery(this).html();
      divide_value = val.split('</option>');
      var id = jQuery(this).attr("id");
      var list_select='<div class="content-select-material">';
      list_select+='<ul class="material-design-select">';
      list_select+='<li><div>'+options.title+'</div><i class="arrow-down"></i>';
      list_select+='<ul id="'+options.name+'">';

      for (var i = 0; i < divide_value.length -1; i++) {
        var valid_plugin=divide_value[i].indexOf('class="');
        if(valid_plugin==-1)
        {
          var value =divide_value[i].substring(divide_value[i].indexOf('value="')+7,divide_value[i].indexOf('">'));
          var text =divide_value[i].substring(divide_value[i].indexOf('">')+2);
          list_select+='<li id="'+value+'" class="'+id+'" >'+text+'</li>';
        }else
        {
          alert("select_material. ERROR: el plugin no admite clases css, modifique directamente el estilo desde el archivo css referente a dicho plugin o no servira");
        }
      }
      list_select+='</ul>';
      list_select+='</li>';
      list_select+='</ul>';
      list_select+='</div>';
      jQuery(this).replaceWith(list_select);
    });
     return this;
}
jQuery.fn.selectMaterialClick =function(){
  // son dos atributos si no se envian el plugin no  trabajara, los atributos son
  // name, el id del select
  this.each(function(){
    var value = jQuery(this).attr("id");  // el id de cada li es igual al valor de los select
    var id = jQuery(this).attr("class"); // convierte la class de los li en un id para el input
    var name = jQuery(this).parent().attr("id"); // convierte el id del padre del la lista en el name que era el equivalente al nombre del select
    var input = jQuery("input[id='"+id+"']")[0];
    if(input)
    {
      var input_replace ='<input type="hidden" id="'+id+'" name="'+name+'" value="'+value+'">';
      jQuery("input[id='"+id+"']").replaceWith(input_replace);
    }else
    {
      jQuery(this).parent().parent().parent().parent().append("<input type='hidden' id='"+id+"' name='"+name+"' value='"+value+"'>");
    }
  });
  return this;
}
