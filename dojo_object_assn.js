PizzaOven = function(crustType, sauceType, cheeses, toppings){
    this.crustType = crustType;
    this.sauceType= sauceType;
    this.cheeses = cheeses;
    this.toppings = toppings;
    this.eat = function() {
        console.log("You ate the pizza that is made of " + this.crustType + " and " + this.sauceType + " and " +this.cheeses + " and " + this.toppings + ".");
    }
}

let pepperoni = new PizzaOven("flat crust","spicy marinara","mozzarella",["pepperoni"]);
pepperoni.eat();

function sandwichOven(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}

let sand1 = sandwichOven(
    "sourdough",
    ["shredded beef","porchetta","prosciutto"],
    "provolone",
    ["lettuce", "tomato", "peppers", "oil and seasoning"]
)

console.log(sand1);

let spicePizza = new PizzaOven("deep dish", "traditional", ["mozzarella"], ["peppers ","salami ","pepperoni", "sausage"]);
spicePizza.eat();
let toppings = ["pepperoni", "sausage","peppers", "olives"];
let cheeses = ["mozzarella","provolone","blue cheese"];
let crusts = ["thin crust","stuffed crust","deep dish"];
let sauces = ["traditional sauce","spicy sauce","alfredo sauce"];
let randomPizza = new PizzaOven(
    toppings[Math.floor((Math.random())*toppings.length)],
    cheeses[Math.floor(Math.random()*cheeses.length)],
    crusts[Math.floor(Math.random()*crusts.length)],
    sauces[Math.floor(Math.random()*sauces.length)]);
randomPizza.eat();

console.log(toppings[Math.floor((Math.random())*toppings.length)]);