// ex-js-objects-snack-2

// Code Question 1

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/* viene stampato un oggetto con due referenze "hamburger" e "secondHamburger" con il name cambiato in 
"Double Cheese Burger" */

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); 
// console.log(secondBurger.name); 



// Code Question 2

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/* viene stampato in console la prima stringa della proprietà "ingridients" del oggetto "hamburger 
ovvero "Salad", poi viene stampato in console un altro oggetto "secondHamburger", con sempre la prima stringa 
della proprietà "ingridients" ovvero "Salad" */

// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = {...hamburger};
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]);
// console.log(secondBurger.ingredients[0]); 



// Code Question 3

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/* Sono stati creati due cloni completi dell'oggetto hamburger assegnati a due variabili 
diverse "secondHamburger" "thirdHamburger" */

// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// console.log("secondBurger",secondBurger);
// console.log("thirdBurger",thirdBurger);



// Code Question 4

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

/* il metodo migliore per clonare un oggetto con una funzione dentro come l'oggetto chef 
è lo spread operator con il target di ogni oggetto annidato che prende l'oggetto cosi com'è senza trasformarlo prima in un JSON 
e poi trascriverlo in Javascript, mentre per l'oggetto restaurant possiamo usare structuredClone o
JSON.parse(JSON.stringify()) rimane una delle migliori in assoluto per la velcoità di 
caricamento e per il passaggio dei dati che viene reso meno pesante per il server da poi tradurlo e leggerlo  */

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };



// Code question 5

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/* in console da parte di "hamburger" compare il nome di chi ha fatto il panino e il nome del locale,
 mentre con secondBurger nel secondo esce undefined perchè viene recuperato solamente il primo oggetto 
 di hamburger e non gli oggetti annidati e risultanto come non presenti,comunque in totale è stati creato 
 un oggetto con due chiamate*/

//  const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const newRestaurant = {...hamburger.maker.restaurant};
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = {...hamburger};
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // ?
// console.log(secondBurger.maker.name); // ?
// console.log(hamburger.maker.restaurant.name); // ?
// console.log(secondBurger.maker.restaurant.name); // ?



// Code Question 6

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

/* il metodo migliore rimane los */

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

const secondChef = JSON.parse(JSON.stringify(chef));

console.log(secondChef);