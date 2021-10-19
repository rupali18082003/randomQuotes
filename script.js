const quote = document.querySelector('.quote');
const next = document.querySelector('.next');

// const request = new XMLHttpRequest();
// request.open('GET', `https://goquotes-api.herokuapp.com/api/v1/all/quotes`);
// // request.open('GET', `https://zenquotes.io/api/random`);
// request.send();
// console.log(request);
// console.log(request.responseText[0]);

// GET https://icanhazdadjoke.com/
/*
	fetch api returns a promise
*/

const generateQuotes = function(){
	const setHeader = {
		headers: {
			Accept: "application/json"
		}
	}

	fetch('https://icanhazdadjoke.com', setHeader)
	.then((res) => res.json())
	.then((data) => quote.textContent = data.joke)
	.catch((err) => console.log(err))
}

next.addEventListener('click', generateQuotes);

generateQuotes();

