// // funcDec(5,5);

// // let createCounter = function createCounter() {
// //     let counter = 0
// //     const myFunction = function() {
// //          counter = counter + 1
// //          return counter
// //        }
// //        return myFunction
// //      }
// //      const increment = createCounter()
// //     const c1 = increment()
// //     const c2 = increment()
// //     const c3 = increment()

// //     function funcDec(x,y){
// //       var result = x+y;
// //       console.log(result);
// //     }
   
// //     console.log('example increment', c1, c2, c3)

// const Person = function(x,y){
//   const fName = x;
//   const sName = y;
//   const sayHi = function(){
//     console.log('Hi my name is '+fName);
//   }
  
//   return function(emotion){
//     console.log(fName +' '+ sName +' is feeling '+emotion);
//     sayHi();
//   }
// }

// const emotion = Person('Mark','Cosgrave');
// emotion('Sad');

// //console.log(sayName.sayHi());
// console.log(Person.executionObj);

var increment = 'global increment';

const myCallback = function(increment,callback){
  for(var x = 0; x<10; x++){
    increment++
  };
  callback();
  return increment;
}



