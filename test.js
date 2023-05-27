/* function makeAdder(x,y) {

   console.log("Inside makeAdder",x) ;
    function inner() {
        console.log("inner",y) ;
        return x+y;
    }

   return inner();

  }

  console.log(makeAdder(10,20)); */


  function makeAdder1(x,y) {

    console.log("Inside makeAdder",x) ;
     return function() {
         console.log("inner",y) ;
         return x+y;
     }
 
    //return inner();
 
   }

  let data = makeAdder1(10,20);
  console.log(data());

  makeAdder1(10,20)();





  function apple (a){
    return a;
  }


  
  function banana (b){
    return b + a;
  }


