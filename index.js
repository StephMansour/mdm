var words = require("an-array-of-french-words")


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your letters ?\n`, (letters) => {
	readline.question("How many letters \n", (num) => {
let hasDouble = false;

if (letters.split("").length !== getUniq(letters.split("")).length) {
hasDouble = true;
console.log(hasDouble)
	
}

		const res = words.filter(function(word){
 		 if (letters.split("").some((letter) => {
    		return word.includes(letter)
 		 })) {
    		return word
  		}
})
.filter(w => w.length === +num)
.filter(w => {
	if(w.split("").every(l => letters.includes(l))){
	return w
}
})
.filter(w => {
	if(!hasDouble) {
return getUniq(w.split("")).length === w.split("").length
	
}
return w
})

console.log(res)
  readline.close()
	})
})




function getUniq(arr){
	return new Array(...new Set(arr))
}