//First Non-repeating character
function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if(str.indexOf(char) == str.lastIndexOf(char)) {
        return char
      }
    }
    return "No characters found.";
  }
  
//   console.log(firstNonRepeatingCharacter("ahhaello"))


//Remove First and Last Character Part Two
/*
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
function array(arr){
    if (arr.length > 2 ){
        arr.shift(arr[0])
        arr.pop(arr[arr.length-1])
        return arr
    }
    else{
        return "NULL"
    }
  }
  
  console.log(array([1,2,3,4]))
  console.log(array([1,2,3,4,5]))
  console.log(array(""))
  console.log(array([4]))
  console.log(array([1,2]))