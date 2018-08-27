document.getElementById("js-clicker").addEventListener("click", () =>  {
	document.getElementById("js-clicker").style.visibility = 'hidden'
	fetch('/birthdays')
	.then(response => {
		return response.json();
	})
	.then(birthdays => {
		let listEl = document.getElementById("birthdayList")   // Target the location
  		for(i=0; i<birthdays.length; i++) {
        	let liElement = document.createElement("li")    // Create the li element
        	let textNode = document.createTextNode(birthdays[i].name + "       " + birthdays[i].date + "     " + birthdays[i].greeting)   // Create text snippet we are going to use
        	liElement.appendChild(textNode)    // Add the text snippet to the li element
        	listEl.appendChild(liElement)    // Add the li element+text to the html document location (ul in this case)
}}
)
})