jQuery.fn.buttonOfBudget = function(){
  this.each(function(){
    // el valor de la variable se cambia por un atributo que llegue, lo que faltaria es modificar un poco el plugin por si el numero cambia
    var number=0;
    var i= '<div class="number-budget">'+number+'</div>';
    var replace='<ul class="nav navbar-nav navbar-right content-bottom-do-budget"> \
      <li> \
        <a href="#" class="bottom-do-budget">'+i+' \
          <i class="do-budget"></i> \
          <p class="do-budget-text">comparar / cotizar</p> \
        </a> \
      </li>\
    </ul>';
    this.innerHTML=replace;
  });
  return this;
}
