function Stack() {
     this.item = [];
     
   this.push = function(element){
      this.item.push(element);
   }
   
   this.pop = function(){
      if(!this.item.length) return "";
      else return this.item.pop();
   }
   
   this.peek = function(){
      if(this.item.length) return "";
      else return this.item[this.item.length - 1];
   }
   
   this.isEmpty = function(){
      return this.item.length == 0 ? true : false;
   }
     
   this.contains = function(element){
       if(this.item.indexOf(element) != -1) return true;
       else return false;
   }
}

function Hisotry(){
   let current = "";
   let stack = new Stack();
   let forwardStack = new Stack();

   this.go = function(element) {
     if(!current) current = element;
     else {
         stack.push(current);
         current = element;
     }  
     console.log(current);
   }
   
   this.back = function(){
      forwardStack.push(current);
      var item = stack.pop();
      if(!item) console.log("exhausted with backward list");
      else {
          current = item;
          console.log(current); 
      }  
   }
   
   this.forward = function(){
     let item = forwardStack.pop();
     if(!item) console.log("exhausted with forward list");
     else console.log(item);
   }
}


let history = new Hisotry();
history.go("1");
history.go("2");
history.go("3");
history.back();
history.back();
history.back();
history.forward();
history.forward();
history.forward();




