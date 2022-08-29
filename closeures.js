 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
// alert 1,
//2
//3
//4

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();
//output
//0
//1

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); 
    }, 1000);
  }
  

  //output:3,3,3





let f;
const g = function(){
    const length = 3;
    f = function( breadth){
        console.log(length * breadth);
    }
}
g();
f( 2 );
console.dir(f);

//output:6




 const cat= function(){
     let b=0;
     
     return function(){
        b++;
        console.log(`The count of b is ${b}`);
     }
 }
 let dog= cat();
 console.log(dog);
 console.dir(dog);
 dog();
 dog();
 dog();
 // output:1,2,3


var a = 12;
(function () {
  alert(a);
})();

//output:12


var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
 ////output: 12 alert

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
         outerArg = 
        + outerArg + 
        "\n" + 
        "innerArg = " +
        innerArg +
        "\n" +
        "outerVar = " +
        outerVar +
        "\n" +
        "innerVar = " +
        innerVar +
        "\n" +
        "globalVar = " +
        globalVar
    );
    })(456);
})(123);

//out put;
//123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
