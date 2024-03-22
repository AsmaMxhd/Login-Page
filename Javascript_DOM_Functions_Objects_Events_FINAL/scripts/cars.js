/* 
 * using a function to create an object
 */
function Car(make, model, year, doors, price){
	this.make = make;
	this.model = model;
	this.year = year;
	this.doors = doors;
	this.price = price;

	/* 
 	 * Privelaged function -> a function belonging to the object
 	 */
	this.msrp = function(){
		/* 
 	 	 * toLocaleString -> allows us to format text according to region
 	 	 */
		return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}
	
	this.monthlyPayments = function(term){
		var amount = this.price / term;
		return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); 
	}
}

var accord = new Car('Honda', 'Accord', 2017, 4, 26000);
var odyssey = new Car('Honda', 'Odyssey', 2018, 4, 35000);
var crv = new Car('Honda', 'CRV', 2017, 4, 17500);
var pilot = new Car('Honda', 'Pilot', 2018, 4, 32595);

var camry = new Car('Toyota', 'Camry', 2018, 4, 27500);
var sienna = new Car('Toyota', 'Sienna', 2018, 4, 34500);
var corolla = new Car('Toyota', 'Corolla', 2017, 4, 23250);

var rogue = new Car('Nissan', 'Rogue', 2018, 4, 19570);
var altima = new Car('Nissan', 'Altima', 2018, 4, 28200);
var maxima = new Car('Nissan', 'Maxima', 2018, 2, 31000);
var sentra = new Car('Nissan', 'Sentra', 2017, 4, 16500);
var armada = new Car('Nissan', 'Armada', 2017, 4, 32250);

var cars = [accord, odyssey, crv, pilot, camry, sienna, corolla, rogue, altima, maxima, sentra, armada];