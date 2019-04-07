import React, {useState} from 'react';
import words from "an-array-of-french-words"

function getUniq(arr){
	return new Array(...new Set(arr))
}

const FindTheWord = () => {
    const [w, setW] = useState([]);
    const [letters, setLetters] = useState(null);
    const [num, setNum] = useState(null);

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-3 col-md-6">
                <h2 className="text text-center">Trouves le mot</h2>
                <br/>
                <form onSubmit={(e) => {
                e.preventDefault()
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
setW([...res])
            }}>
                <div className="form-group">
                    <label htmlFor="lettres">
                    Lettres
                    </label>
                    <input type="text" id="lettres" className="form-control" onChange={(e) => setLetters(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="num">
                Nombre de lettres
                </label>
                <input type="number" id="num" className="form-control" onChange={(e) => setNum(e.target.value)}/>

                </div>
               
               
                <button type="submit" className="btn btn-primary">Search</button>
                
                <ul className="list-group">
                {
                    w.map((word) => (
                        <li className="list-group-item" key={word}>{word}</li>
                    ))
                }
                </ul>
                 </form>
                </div>
            </div>
        </div>
    )
}

export default FindTheWord