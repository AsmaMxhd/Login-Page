/* 
 * document.getElementById(id) -> single node 
 * ToDo: Get #consoleLeft and #consoleRight
 */
var consoleLeft = document.getElementById('consoleLeft');
var consoleRight = document.getElementById('consoleRight');

/* 
 * document.getElementsByClassName(class) -> nodeList 
 * ToDo: Get all .car
 */
var allCars = document.getElementsByClassName('car');

/* 
 * document.querySelectorAll(selector) -> nodeList 
 * ToDo: Get all #toyotas .car and #nissans .car
 */
var toyotas = document.querySelectorAll('#toyotas .car');
var nissans = document.querySelectorAll('#nissans .car'); 

/*
 * document.getElementsByTagName(tagName) --> return a node list with every element of this type
 */
var paragraphs = document.getElementsByTagName('p'); 

/* 
 * document.createElement(tagToCreate) -> new tag 
 * ToDo: Create a new paragraph
 */
var newParagraph = document.createElement('p');

/* 
 * [element].innerHTML -> set the HTML of a node (may include tags) 
 * ToDo: Set HTML of new paragraph to list the count of cars in the dealer lot
 */
newParagraph.innerHTML = '<b>There are: ' + allCars.length + ' cars in the lot</b>';

/* 
 * [element].style -> set a desired CSS property (use camelCase instead of hyphens)
 * ToDo: Change new paragraph text color to red
 */
newParagraph.style.color = 'red';

/* 
 * [element].setAttribute(attrName, attrValue) -> set a desired attribute 
 * ToDo: Set id for new paragraph to 'allCars'
 */
newParagraph.setAttribute('id', 'allCars');

/* 
 * [element].appendChild(newElement) -> adds new element as the last child of the parent
 * ToDo: Add new paragraph to #consoleLeft
 */
consoleLeft.appendChild(newParagraph);

//Create another new paragraph
newParagraph = document.createElement('p');

/* 
 * document.createTextNode('text') -> new text node (i.e. text only) 
 * ToDo: Create a new text node and set text to be # of Toyotas on the dealer lot
 *			- Add the new text to the paragraph
 *			- Add the paragraph to #consoleLeft
 */
var txt = document.createTextNode('Number of Toyotas: ' + toyotas.length);
newParagraph.appendChild(txt);
consoleLeft.appendChild(newParagraph);

//Create another new paragraph
newParagraph = document.createElement('p');

//Set the text to be # of Nissans on the dealer lot
newParagraph.textContent = 'Number of Nissans: ' + nissans.length;
consoleLeft.appendChild(newParagraph);

//Create a new ul
var list = document.createElement('ul');

/*  
 * forEach -> loop through a collection/list
 * ToDo: Loop thru all nissans
 *			- Create an li for each nissan
 *			- Get the model from name attribute
 *			- Make text the model using [element].textContent
 *
 * Inside forEach loop
 * [element].getAttribute(attr) -> gets the value of an attribute 
 */
nissans.forEach(function(nissan) {
var listItem = document.createElement('li');
	var name = nissan.getAttribute('name');

	listItem.textContent = name;
	list.appendChild(listItem);
});

//Add ul to #consoleLeft
consoleLeft.appendChild(list);

/* 
 * [element].insertBefore(newElement, existingElement) -> adds new element before a specific child 
 * ToDo: Add new paragraph to #consoleLeft before the ul
 */
newParagraph = document.createElement('p');
newParagraph.innerHTML = '<b>NISSANS</b>';
consoleLeft.insertBefore(newParagraph, list);



/* 
 * function -> Javascript version of a method
 * ToDo: Create printCarDetails(carDiv)
 *			- Loop thru cars and compare model to name attribute (getAttribute)
 *			- Get Car Details and output to #consoleRight
 */
function printCarDetails(carDiv){
	var name = carDiv.getAttribute('name');
	//Loop thru cars and find selected car object
	var selectedCar = cars.filter(x => x.model == name)[0];

	//Get #carTitle
	var carTitle = document.getElementById('carTitle');

	//Create h5 and give id carTitle
	var newCarTitle = document.createElement('h5');
	newCarTitle.setAttribute('id', 'carTitle');

	/* 
 	 * [element].textContent -> another way to set a node's text (no tags allowed)
 	 * ToDo: Set h5 text to car make and model
 	 */
 	newCarTitle.textContent = selectedCar.make + ' ' + selectedCar.model;

	/* 
 	 * [element].replaceChild(newElement, existingElement) -> replace existing child with new element 
 	 * ToDo: Replace h5 with carTitle
 	 */
 	consoleRight.replaceChild(newCarTitle, carTitle);

	/*
	 * ToDo: Create new paragraph
	 * 			- Set innerHTML to be year, # of doors, MSRP, 72 monthly payments
	 */
	var newParagraph = document.createElement('p');
	newParagraph.innerHTML = 'Year: ' + selectedCar.year + '<br>' +
							'Doors: ' + selectedCar.doors + '<br>' + 
							'MSRP: ' + selectedCar.msrp() + '<br>' +
							'72 Monthly Payments: ' + selectedCar.monthlyPayments(72);

	//Find all existing #consoleRight p and remove 1st one
	/* 
	 * Inside if block
 	 * [element].removeChild(toRemove) -> remove existing child 
 	 */
 	var existingParagraphs = document.querySelectorAll('#consoleRight p');

 	if(existingParagraphs.length > 0)
 		consoleRight.removeChild(existingParagraphs[0]);

	//Add new paragraph to #consoleRight
	consoleRight.appendChild(newParagraph);
}

/* 
 * addEventListener -> add a 'listener' so we can respond to a specific action
 * ToDo: Add 'click' event listener for all Toyotas to go to printCarDetails(this)
 * ToDo: Add 'click' event listener for all Nissans to go to printCarDetails(this)
 */
toyotas.forEach(function(toyota){
	toyota.addEventListener('click', function(){
		printCarDetails(this);
	});
});

nissans.forEach(function(nissan){
	nissan.addEventListener('click', function(){
		printCarDetails(this);
	});
});

/*
 * setInterval(codeToExecute, milliseconds) -> executes something at a specified interval (every 'x' amount of milliseconds)
 * ToDo: Set an interval that will update the count of Hondas on the lot once every second
 */
var hondaCount = document.getElementById('hondaCount');
hondaCount.textContent = 1;

var hondaInterval = setInterval(function(){
	hondaCount.textContent++;
}, 1000);

var toyotaCount = document.getElementById('toyotaCount');
toyotaCount.textContent = 1;

var toyotaInterval = setInterval(function(){
	toyotaCount.textContent++;
}, 1000);

/*
 * setTimeout(codeToExecute, milliseconds) -> executes the specified code ONCE after 'x' amount of time
 * clearInterval(intervalName) -> stops the interval
 * ToDo: Since there are only 4 Hondas on the lot, stop the counter after 4 seconds. Set a timeout for 4 seconds that will clear the interval
 */
setTimeout(function(){
	clearInterval(hondaInterval);
}, 3000);

setTimeout(function(){
	clearInterval(toyotaInterval);
}, 2000);

//Set an interval that will update the count of Toyotas on the lot once every second. Stop counting once you've reached the number of toyotas



