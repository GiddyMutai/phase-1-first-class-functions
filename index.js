function receivesAFunction(tattleTale){
  tattleTale();
}

function returnsANamedFunction(){
  return testFunct = () => console.log("An arrow function")
}
function returnsAnAnonymousFunction(){
  return function(){
      console.log("Is an anonymous function")
  }
}