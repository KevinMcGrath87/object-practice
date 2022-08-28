// object practice

let myGuy = {
    name: "Adrian",
    lastName: "Garcia",
    address: "Chicago"
}

console.log(myGuy.name);

//a constructor function for persons


Person = function(name, lastName, address) {
    this.name = name;
    this.lastName= lastName;
    this.address= address;
    this.pity = function() {
        return("what a pity that " + this.name + " is dead");
    };

}
let Kevin = new Person("Kevin", "McGrath", "Chicago");
console.log(Kevin.name);
console.log(Kevin.lastName);
console.log(Kevin.pity());

let Age = new Person("Adrian", "Garcia", "New York City");
console.log(Age.pity());


let Beauty = new Person("Girl", "atParty", ["Chicago", "Illinois", "United States"]);
Beauty["weight"] = "356";
console.log(Beauty.address[1]);
console.log(Beauty.pity());

console.log(Beauty);

