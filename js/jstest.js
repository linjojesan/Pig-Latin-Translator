
// test for js function


function test(str) {
  var newArray = str.split(" ");
  console.log(newArray);
  var numbers = /\d/;
  var vowels = /\aeiou/i;

  for (var i = 0; i < newArray.length; i++) {

  if (newArray[i].match(/\d/) {
    console.log(true);
  } else  {
    console.log(false);
    }
  }
}
