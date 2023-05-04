// Define a variable to hold the data
var person = {
	name: "Avul Pakir Jainulabdeen Abdul Kalam",
	dateOfBirth: "15 October 1931",
	placeOfBirth: "Rameshwaram,India",
	occupation: "Occupation",
	biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ut tellus a pulvinar. Sed bibendum ex in mauris bibendum, non malesuada sapien convallis. Donec id bibendum justo. Fusce porttitor, nulla in efficitur vehicula, lorem odio maximus mauris, nec pretium mauris elit nec elit. Duis lobortis, sapien in ullamcorper lobortis, ex arcu sagittis lectus, in fermentum velit lacus nec nunc. Quisque vulputate elementum nisi, at vestibulum orci dapibus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
};

// Define a function to populate the HTML code with data
function populateData() {
	// Populate the name element
	var nameElement = document.querySelector("h2");
	nameElement.innerHTML = person.name;
	
	// Populate the date of birth element
	var dateOfBirthElement = document.querySelectorAll("p")[0];
	dateOfBirthElement.innerHTML = "Date of Birth: " + person.dateOfBirth;
	
	// Populate the place of birth element
	var placeOfBirthElement = document.querySelectorAll("p")[1];
	placeOfBirthElement.innerHTML = "Place of Birth: " + person.placeOfBirth;
	
	// Populate the occupation element
	var occupationElement = document.querySelectorAll("p")[2];
	occupationElement.innerHTML = "Occupation: " + person.occupation;
	
	// Populate the biography element
	var biographyElement = document.querySelectorAll("p")[3];
	biographyElement.innerHTML = person.biography;
}

// Call the function to populate the data on page load
populateData();