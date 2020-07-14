// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

tableData.forEach((sighting) => {
	let row = tbody.append("tr")
	Object.values(sighting).forEach((x) => {
		let cell = row.append("td");
		cell.text(x);
	});
});

//tr td text td text td text
function table(data){
	tbody.html("");
	data.forEach((sighting) => {
		let row = tbody.append("tr")
		Object.values(sighting).forEach((x) => {
			let cell = row.append("td");
			cell.text(x);
		});
	});
}


function handleClick() {
	let date = d3.select("#datetime").property("value");

	try{
	let filter = tableData.filter(row => row.datetime == date);
	table(filter);
	}
	catch{
		console.log("no date inputted");
	}
}

d3.select("#filter-btn").on("click", handleClick);