document.getElementById("js-clicker").addEventListener("click", () =>  {
	fetch('/birthdays')
	.then(response => {
		return response.json();
	})
	.then(birthdays => {
		console.log(JSON.stringify(birthdays));
	});
})



