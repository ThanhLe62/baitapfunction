// Bài tập 1
// function sum()
// {
//     var a = parseInt(prompt("Nhập số a"));
//     var b = parseInt(prompt("Nhập số b"));
//     var sum = a + b;
//   document.write("Tổng hai số "+ a + " + " + b + " = " + sum);
// }
// sum();

// Bài tập 2
// function myFunction() {
//     let str = arguments[0];
    
//     alert("chuỗi là: " + str);
    
//     alert("độ dài chuỗi là: " + str.length);


// }

// myFunction("dagfadvsdghgfadg"); 

// Bài tập 3

// function myFunction(){
// let str = arguments[0] ;
// let res = str.toUpperCase();
// alert(res);
// }
// myFunction("svgdvdsg");

// Bài tập 4

// function reverseString(str) {
//   var newString= "";
//   for (var i = str.length - 1; i >= 0; i--);{
//     newString+=str[i];
    
//   }

//   return newString;
  
// }  
// reverseString('hello')  ;

// Bài tập 5

const numArray = [9, 5, 3, 2, 8, 6, 1]

numArray.sort((a, b) => a - b);
console.log(numArray);

