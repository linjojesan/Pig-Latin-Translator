$(document).ready(function() {
  $("form").submit(function(event) {
      event.preventDefault();
    var input = $("#word").val();
//     // var result = input();
//     var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "k", "m", "n", "p", "q", "r", "s", "t", "v", "x","w","z"];
    var vowels = /\aeiou/i;
    var numbers = /\d/;
      var letters = input.split("");
      console.log(letters);
//
      for (var i = 0; i <= letters.length; i++) {

      }


  });
});
//    function newArray(input) {
//       var letters = input.split("");
//       var firstSection = [];
//       console.log(letters);
//
//     }
// //
//     for (i = 0; i < vowels.length; i++) {
//       if (vowels.includes(input.charAt(0))) {
//         firstSection = letters.push("ay");
//         return firstSection;
//
//       }
//     }
//       console.log(firstSection);
//
//
//
//
//
//
//
//
//     //
//     //     return true;
//       // letters.match(vowels)
//       //   return true;
//
//
//
//
//       //   return true;
//       // }
//
//       // letters.includes("t", 0);
//       //   if (letters === "t")
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //     var newNewArray = [];
// //
// //
// //
// //     // for (var index = 0; index < newArray.length; index++) {
// //     // if (newArray[index] === numbers)
// //
// //
// // // }
// //     newNewArray.push("");
//
//// function test(str) {
//   var newArray = str.split(" ");
//   console.log(newArray);
//   var numbers = /\d/;
//   var vowels = /\aeiou/i;
//
//   for (var i = 0; i < newArray.length; i++) {
//
//   if (newArray[i].match(/\d/) {
//
//   } else  {
//
//     }
//   }
// }

//
// //     $(".result").hide();
// //
// //     var inputSentence = $("#sentence").val();
// //     // var vowels = ["a", "e", "i", "o", "u" ];
// //     var letters = inputSentence.split("");
// //     var newLetters = [];
// //
// //
// //     for (var index = 0; index < letters.length; index++) {
// //       if (letters[index] === "a" ||
// //       letters[index] === "e" ||
// //       letters[index] === "i" ||
// //       letters[index] === "o" ||
// //       letters[index] === "u") {
// //
// //       newLetters.push("-");
// //
// //       } else {
// //       newLetters.push(letters[index]);
// //       }
// //     }
// //
// //     var arrayToString = newLetters.join("");
// //
// //
// //     $(".result").show();
// //     $("#result").text(arrayToString);


// var = consonant ;
//
// var = numbers = /\d/;
// var = symbols = [^Da-zA-Z];
