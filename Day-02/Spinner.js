function Spinner(){
   this.__counter = 0;
}

Spinner.prototype.up = function(){
   return ++this.__counter;
}

Spinner.prototype.down = function(){
   return --this.__counter;
}
